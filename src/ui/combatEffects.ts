/** Hand-drawn vector effects stay sharp at desktop and phone battle sizes. */
export function effectArt(effect:string){
 const shapes:Record<string,string>={
  blade:'<path d="M8 89Q25 30 94 9Q56 51 8 89Z"/><path d="M23 94Q44 54 93 33" class="fx-line"/>',
  claw:'<path d="M12 79Q33 32 72 9L30 80ZM38 91Q53 45 93 17L56 90ZM6 58Q12 22 41 6L21 58Z"/>',
  foxfire:'<path d="M51 5Q46 34 72 42Q94 68 69 88Q48 100 25 85Q4 62 32 36Q27 63 44 58Q60 47 51 5Z"/><path d="M48 53Q78 82 50 89Q28 84 48 53Z" fill="#fff4cf"/>',
  flame:'<path d="M50 3L62 33L87 13L75 46L99 53L72 65L86 92L56 77L38 99L35 73L4 83L25 55L4 36L37 36Z"/><circle cx="50" cy="55" r="18" fill="#fff1af"/>',
  tide:'<path d="M4 66Q22 20 51 38Q24 40 38 64Q51 80 65 46Q81 20 96 50Q80 46 78 77Q53 102 4 66Z"/><path d="M8 79Q48 104 94 66" class="fx-line"/>',
  stone:'<path d="M20 73L27 36L42 21L50 53L65 5L78 51L88 34L98 82L64 96Z"/><path d="M6 91L18 74L24 97M40 24L51 64L44 85M65 7L61 70L77 87" class="fx-line"/>',
  club:'<path d="M47 3L55 39L85 16L68 47L100 56L65 62L83 91L55 73L42 99L37 70L6 84L25 57L1 43L34 39Z"/><circle cx="48" cy="56" r="11" fill="#fff3d3"/>',
  storm:'<path d="M60 1L27 51L47 51L34 99L79 39L55 41Z"/><path d="M8 37L28 21M76 68L94 86M4 72L26 65" class="fx-line"/>',
  venom:'<path d="M46 7Q83 38 77 66Q71 98 43 95Q12 90 18 62Q22 38 46 7Z"/><circle cx="71" cy="19" r="9"/><circle cx="89" cy="78" r="7"/>',
  leaf:'<path d="M51 77Q10 70 17 17Q66 15 51 77ZM54 73Q54 36 95 40Q96 78 54 73Z"/><path d="M30 35L56 88M57 69L78 55" class="fx-line"/>',
  shield:'<path d="M50 5L87 23L81 62Q76 79 50 97Q23 79 18 62L12 23Z" fill="none" stroke="currentColor" stroke-width="6"/><path d="M33 49L47 65L71 34" class="fx-line"/>',
  heal:'<path d="M41 10H59V41H90V59H59V90H41V59H10V41H41Z"/><circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="2"/>',
  fist:'<path d="M18 55V31Q24 21 32 30V22Q41 14 47 24Q57 15 64 28Q76 22 81 35L85 59L65 83H33Z"/><path d="M32 32V48M48 26V46M64 30V47M18 55L47 51L59 62" class="fx-line"/>',
  fang:'<path d="M14 16Q54 26 40 82Q22 65 14 16ZM86 16Q46 26 60 82Q78 65 86 16Z"/><path d="M25 89L43 98M75 89L57 98" class="fx-line"/>',
  roots:'<path d="M50 5L46 49L20 25L34 62L5 86L38 74L51 98L62 72L96 86L71 58L88 30L60 48Z"/><path d="M50 22L50 80M50 59L20 79M50 59L80 79" class="fx-line"/>',
  bloom:'<path d="M50 49C-12 25 34 -9 50 30C67 -10 111 26 68 48C116 73 72 112 52 71C28 115 -10 76 34 53Z"/><circle cx="51" cy="52" r="12" fill="#fff5c9"/>',
  mist:'<path d="M10 74Q-5 38 32 40Q15 0 60 15Q83 7 83 36Q114 55 81 82Q64 100 46 81Q25 103 10 74Z" opacity=".55"/><path d="M14 58Q38 27 68 52T91 63M21 76Q58 41 79 80" class="fx-line"/>',
  chain:'<g fill="none" stroke="currentColor" stroke-width="7"><ellipse cx="28" cy="73" rx="11" ry="21" transform="rotate(40 28 73)"/><ellipse cx="50" cy="50" rx="11" ry="21" transform="rotate(40 50 50)"/><ellipse cx="73" cy="27" rx="11" ry="21" transform="rotate(40 73 27)"/></g>',
  lantern:'<path d="M35 18H65L81 42L72 77H28L19 42Z"/><path d="M31 82H69M39 10H61M42 23L37 71M58 23L63 71" class="fx-line"/><path d="M50 85V98" class="fx-line"/>',
  ice:'<path d="M50 2L65 27L59 52L83 36L98 58L72 80L53 97L30 79L3 57L17 33L42 51L36 26Z"/><path d="M50 8V90M12 52L87 67M19 75L86 44" class="fx-line"/>',
  feather:'<path d="M86 5Q31 0 16 44L23 61L9 95L38 70Q97 59 86 5Z"/><path d="M25 78L77 16M41 58L24 47M55 41L34 32M58 39L80 41" class="fx-line"/>',
  bell:'<path d="M44 14V7H56V14Q78 19 76 51L87 70H13L24 51Q22 19 44 14ZM38 79H62Q59 96 50 94Q41 96 38 79Z"/><path d="M7 31Q-2 48 9 63M93 31Q102 48 91 63" class="fx-line"/>',
  bone:'<path d="M28 13Q7 4 8 23Q-5 39 17 43L61 85Q62 106 78 91Q98 94 94 76Q103 56 84 62L42 25Q46 4 28 13Z"/>',
  mask:'<path d="M19 10Q50 28 81 10L76 68Q68 91 50 98Q28 85 24 68Z"/><path d="M31 44L44 51M69 44L56 51M37 71Q50 85 64 68" fill="none" stroke="#192a32" stroke-width="6"/>',
  steam:'<path d="M25 94C-7 64 56 59 26 12M52 91C18 65 82 47 49 3M78 95C48 71 102 57 79 19" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>',
  ripple:'<g fill="none" stroke="currentColor" stroke-width="5"><ellipse cx="50" cy="66" rx="45" ry="21"/><ellipse cx="50" cy="64" rx="26" ry="12"/></g><path d="M51 5Q26 37 42 47Q70 57 64 33Z"/>',
  needle:'<path d="M82 5L95 17L22 88L4 97L12 77Z"/><path d="M42 45L57 60M61 26L77 42" class="fx-line"/>',
  eye:'<path d="M3 50Q50 -3 97 50Q50 102 3 50Z" fill="none" stroke="currentColor" stroke-width="6"/><circle cx="50" cy="50" r="21"/><circle cx="50" cy="50" r="9" fill="#fff5d1"/>',
  mud:'<path d="M8 82Q1 66 19 62Q17 38 38 47Q40 12 62 36Q85 22 79 55Q111 69 90 86Z"/><circle cx="14" cy="31" r="7"/><circle cx="91" cy="44" r="5"/>',
  coin:'<path d="M50 5A45 45 0 1 0 50 95A45 45 0 1 0 50 5ZM36 36H64V64H36Z" fill-rule="evenodd"/><circle cx="50" cy="50" r="35" fill="none" stroke="#fff5d1" stroke-width="2"/>',
  talisman:'<path d="M26 2H73L78 98L54 88L30 96Z"/><path d="M38 22H64M50 13V43L35 57L65 72M35 78H64M50 55V88" fill="none" stroke="#a5403a" stroke-width="5"/>',
  petal:'<path d="M49 49Q4 9 24 4Q58 -2 49 49ZM52 49Q74 -1 93 24Q108 54 52 49ZM51 54Q106 65 80 90Q57 105 51 54ZM47 53Q45 110 15 82Q-2 58 47 53Z"/>',
  rift:'<path d="M57 0L38 29L56 45L24 72L43 79L32 100L73 70L55 58L82 34L59 28L73 0Z"/><path d="M5 16L31 37M71 77L97 95" class="fx-line"/>'
 };
 return `<svg viewBox="0 0 100 100" aria-hidden="true">${shapes[effect]??shapes.leaf}</svg>`;
}
