import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const build=join(root,'dist-pages');
const branch='codex/pages';
const temporaryRoot=join(root,'tmp');
function git(args,cwd=root,allowFailure=false){
  const result=spawnSync('git',['-c','credential.helper=','-c','credential.helper=!gh auth git-credential',...args],{cwd,encoding:'utf8',windowsHide:true});
  if(result.error)throw result.error;
  if(result.status!==0&&!allowFailure)throw Error(result.stderr.trim()||`git ${args[0]} failed`);
  return {ok:result.status===0,text:result.stdout.trim()};
}
if(!existsSync(join(build,'index.html')))throw Error('Run npm run build:pages first.');
const remote=git(['remote','get-url','origin']).text;
const author=git(['config','user.name']).text,email=git(['config','user.email']).text;
const sourceCommit=git(['rev-parse','--short','HEAD']).text;
const previous=git(['ls-remote','--heads',remote,`refs/heads/${branch}`]).text;
mkdirSync(temporaryRoot,{recursive:true});
const checkout=mkdtempSync(join(temporaryRoot,'pages-publish-'));
function insideCheckout(path){
  const absolute=resolve(path),verified=realpathSync(absolute);
  if(!absolute.startsWith(resolve(temporaryRoot)+sep)||!verified.startsWith(realpathSync(temporaryRoot)+sep))throw Error('Unexpected temporary path.');
  return absolute;
}
try{
  if(previous){git(['clone','--depth','1','--single-branch','--branch',branch,remote,checkout]);}
  else{git(['init','-b',branch],checkout);git(['remote','add','origin',remote],checkout);}
  git(['config','user.name',author],checkout);git(['config','user.email',email],checkout);
  for(const entry of readdirSync(checkout))if(entry!=='.git')rmSync(insideCheckout(join(checkout,entry)),{recursive:true,force:true});
  for(const entry of readdirSync(build))cpSync(join(build,entry),join(checkout,entry),{recursive:true});
  writeFileSync(join(checkout,'.nojekyll'),'');
  git(['add','--all'],checkout);
  const unchanged=previous&&git(['diff','--cached','--quiet'],checkout,true).ok;
  if(unchanged)console.log('The public build is already up to date.');
  else{
    git(['commit','-m',`Publish playtest from ${sourceCommit}`],checkout);
    git(['push','origin',`HEAD:refs/heads/${branch}`],checkout);
    console.log(`Published ${git(['rev-parse','HEAD'],checkout).text} to ${branch}`);
  }
}finally{
  rmSync(insideCheckout(checkout),{recursive:true,force:true});
}
