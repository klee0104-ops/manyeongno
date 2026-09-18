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
  heal:'<path d="M41 10H59V41H90V59H59V90H41V59H10V41H41Z"/><circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="2"/>'
 };
 return `<svg viewBox="0 0 100 100" aria-hidden="true">${shapes[effect]??shapes.leaf}</svg>`;
}
