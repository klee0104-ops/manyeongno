/** Fast modes compress windup/recovery as well as travel, while keeping contact readable. */
export const combatPlaybackSpeed=(speed:number)=>speed>=4?5.5:speed>=2?2.7:1;
