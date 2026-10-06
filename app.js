const seedHeroes = [
  {name:'Антимага',roles:['carry'],tags:['иллюзии','мобильность','поздняя игра'],counters:['магический урон','контроль'],weak:['раннее давление']},
  {name:'Джаггернаут',roles:['carry'],tags:['устойчивость','урон по одной цели','снятие эффектов'],counters:['хрупкие герои','контроль'],weak:['кайт']},
  {name:'Фантомка',roles:['carry'],tags:['физический урон','поздняя игра','мобильность'],counters:['хрупкие герои'],weak:['уклонение','броня']},
  {name:'Сларк',roles:['carry'],tags:['мобильность','снятие эффектов','поздняя игра'],counters:['малоподвижные герои'],weak:['массовый контроль']},
  {name:'Войд',roles:['carry'],tags:['массовый контроль','поздняя игра','мобильность'],counters:['сгруппированные герои'],weak:['кайт']},
  {name:'Морфлинг',roles:['carry'],tags:['мобильность','поздняя игра','устойчивость'],counters:['магический урон'],weak:['контроль']},
  {name:'Террорблейд',roles:['carry'],tags:['иллюзии','поздняя игра','урон по строениям'],counters:['медленный темп'],weak:['массовый урон']},
  {name:'Урса',roles:['carry'],tags:['урон по одной цели','устойчивость','раннее давление'],counters:['танки'],weak:['кайт']},
  {name:'Луна',roles:['carry'],tags:['массовый урон','урон по строениям','ранний темп'],counters:['иллюзии','сгруппированные герои'],weak:['дальний контроль']},
  {name:'Медуза',roles:['carry'],tags:['поздняя игра','массовый урон','устойчивость'],counters:['сгруппированные герои'],weak:['раннее давление','сжигание маны']},
  {name:'Дроу Рейнджер',roles:['carry'],tags:['дальний урон','урон по строениям'],counters:['малоподвижные герои'],weak:['инициация']},
  {name:'Виверна',roles:['carry'],tags:['дальний урон','мобильность','поздняя игра'],counters:['сгруппированные герои'],weak:['инициация']},
  {name:'Шторм',roles:['mid'],tags:['мобильность','магический урон','инициация'],counters:['дальний контроль'],weak:['молчание']},
  {name:'Инвокер',roles:['mid'],tags:['массовый контроль','магический урон','поздняя игра'],counters:['сгруппированные герои'],weak:['раннее давление']},
  {name:'Пак',roles:['mid'],tags:['мобильность','массовый контроль','магический урон'],counters:['малоподвижные герои'],weak:['молчание']},
  {name:'Квопа',roles:['mid'],tags:['мобильность','магический урон','раннее давление'],counters:['хрупкие герои'],weak:['молчание']},
  {name:'Снайпер',roles:['mid','carry'],tags:['дальний урон','ранний темп'],counters:['малоподвижные герои'],weak:['инициация']},
  {name:'Зевс',roles:['mid'],tags:['магический урон','дальний урон'],counters:['иллюзии','невидимость'],weak:['инициация']},
  {name:'Тайдхантер',roles:['offlane'],tags:['массовый контроль','устойчивость','инициация'],counters:['сгруппированные герои','физический урон'],weak:[]},
  {name:'Акc',roles:['offlane'],tags:['инициация','устойчивость','массовый контроль'],counters:['иллюзии','хрупкие герои'],weak:[]},
  {name:'Марс',roles:['offlane'],tags:['инициация','массовый контроль','устойчивость'],counters:['дальний урон','хрупкие герои'],weak:[]},
  {name:'Бристлбэк',roles:['offlane'],tags:['устойчивость','раннее давление'],counters:['физический урон'],weak:['снятие эффектов']},
  {name:'Дарксир',roles:['offlane'],tags:['массовый контроль','инициация','иллюзии'],counters:['иллюзии','сгруппированные герои'],weak:[]},
  {name:'Кентавр',roles:['offlane'],tags:['инициация','устойчивость','мобильность'],counters:['хрупкие герои'],weak:[]},
  {name:'Некрофос',roles:['mid','offlane'],tags:['магический урон','устойчивость'],counters:['танки','хрупкие герои'],weak:['снятие эффектов']},
  {name:'Вайпер',roles:['mid','offlane'],tags:['раннее давление','дальний урон'],counters:['малоподвижные герои'],weak:['инициация']},
  {name:'Лина',roles:['mid','carry'],tags:['дальний урон','магический урон','раннее давление'],counters:['малоподвижные герои'],weak:['инициация']},
  {name:'Пугна',roles:['mid'],tags:['магический урон','урон по строениям','ранний темп'],counters:['танки'],weak:['инициация']},
  {name:'Темпларка',roles:['mid'],tags:['физический урон','раннее давление','поздняя игра'],counters:['хрупкие герои'],weak:['массовый урон']},
  {name:'Эмбер',roles:['mid'],tags:['мобильность','магический урон','поздняя игра'],counters:['малоподвижные герои'],weak:['контроль']}
];
let heroes=[...seedHeroes];
const roleNames={carry:'Керри',mid:'Мид',offlane:'Оффлейн',support:'Саппорт'};
const positionRoles={1:'carry',2:'mid',3:'offlane',4:'support',5:'support'};
const positionLabels={1:'Керри',2:'Мид',3:'Оффлейн',4:'Хард саппорт',5:'Саппорт'};
const midHeroKeys=new Set(['storm_spirit','invoker','puck','queenofpain','sniper','zuus','lina','pugna','templar_assassin','ember_spirit','windrunner','nevermore','leshrac','obsidian_destroyer','outworld_destroyer','huskar','kunkka','void_spirit','tinker','meepo','dragon_knight','viper','primal_beast','magnataur','death_prophet','arc_warden','razor','broodmother','morphling','rubick','pudge','batrider','clinkz','silencer','alchemist','gyrocopter','monkey_king','shadow_fiend']);
const supportHeroKeys=new Set(['abaddon','bane','batrider','beastmaster','chen','crystal_maiden','dark_seer','dazzle','disruptor','earth_spirit','earthshaker','elder_titan','enchantress','enigma','grimstroke','hoodwink','io','jakiro','keeper_of_the_light','lich','lion','marci','mirana','ogre_magi','omniknight','oracle','phoenix','pudge','rubick','shadow_demon','shadow_shaman','silencer','skywrath_mage','snapfire','spirit_breaker','techies','treant','treant_protector','tusk','undying','vengefulspirit','warlock','windrunner','winter_wyvern','witch_doctor','witchdoctor','largo','ringmaster','nyx_assassin','pugna','clockwerk','rattletrap','tiny','tinker','venomancer']);
const heroImages={'Антимага':'antimage','Джаггернаут':'juggernaut','Фантомка':'phantom_assassin','Сларк':'slark','Войд':'faceless_void','Морфлинг':'morphling','Террорблейд':'terrorblade','Урса':'ursa','Луна':'luna','Медуза':'medusa','Дроу Рейнджер':'drow_ranger','Виверна':'winter_wyvern','Шторм':'storm_spirit','Инвокер':'invoker','Пак':'puck','Квопа':'queenofpain','Снайпер':'sniper','Зевс':'zuus','Тайдхантер':'tidehunter','Акc':'axe','Марс':'mars','Бристлбэк':'bristleback','Дарксир':'dark_seer','Кентавр':'centaur','Некрофос':'necrophos','Вайпер':'viper','Лина':'lina','Пугна':' pugna','Темпларка':'templar_assassin','Эмбер':'ember_spirit'};
const portraitSlugFixes={antimage:'anti-mage',phantom_assassin:'phantom-assassin',faceless_void:'faceless-void',winter_wyvern:'winter-wyvern',queenofpain:'queen-of-pain',zuus:'zeus',centaur:'centaur-warrunner',furion:'natures-prophet',rattletrap:'clockwerk',shredder:'timbersaw',abyssal_underlord:'underlord',obsidian_destroyer:'outworld-destroyer',magnataur:'magnus',wisp:'io',life_stealer:'lifestealer',naga_siren:'naga-siren',vengefulspirit:'vengeful-spirit',sand_king:'sand-king',spirit_breaker:'spirit-breaker',keeper_of_the_light:'keeper-of-the-light'};
const jpegPortraits=new Set(['grimstroke','zeus','underlord','drow-ranger']);
function portrait(name,size='small'){
  const hero=heroes.find(h=>h.name===name), key=(hero?.key||heroImages[name]||'').trim();
  const english=hero?.englishName;
  const slug=english?english.toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''):(portraitSlugFixes[key]||key.replace(/_/g,'-'));
  const imageExt=jpegPortraits.has(slug)?'.jpg':'.webp';
  return `<img class="hero-portrait ${size}" src="assets/heroes/${slug}${imageExt}" alt="Портрет: ${name}" loading="lazy" onerror="this.remove()">`;
}
function setHeroPool(rows){
  const byKey=new Map(seedHeroes.map(h=>[(heroImages[h.name]||'').trim(),h]));
  heroes=rows.map(row=>{
    const key=(row.name||'').replace(/^npc_dota_hero_/,''), seed=byKey.get(key)||{};
    const rawRoles=(row.roles||[]).map(x=>x.toLowerCase()), roles=[...(seed.roles||[])];
    if(rawRoles.includes('carry'))roles.push('carry');
    if(rawRoles.some(x=>['nuker','escape'].includes(x)))roles.push('mid');
    if(rawRoles.some(x=>['durable','initiator'].includes(x)))roles.push('offlane');
    if(rawRoles.includes('support'))roles.push('support');
    if(!roles.length)roles.push('carry');
    let wins=0,picks=0;for(let tier=1;tier<=8;tier++){wins+=Number(row[`${tier}_win`]||0);picks+=Number(row[`${tier}_pick`]||0)}
    const rate=picks?(wins+50)/(picks+100):.5;
    return {...seed,id:row.id,key,name:seed.name||row.localized_name,englishName:row.localized_name,apiRoles:rawRoles,roles:[...new Set(roles)],imageUrl:row.img,iconUrl:row.icon,stats:picks?{wins,picks,winRate:wins/picks*100,smoothedRate:rate}:null};
  }).filter(h=>h.name);
  $('heroPoolStatus').textContent=`${heroes.length} героев · ростер обновлён автоматически`;
  draw();loadMatchupsForDraft();
}
async function loadHeroPool(){
  const cacheKey='picker-hero-pool-v1';let cached=null;try{cached=localStorage.getItem(cacheKey)}catch{}
  if(cached){try{const saved=JSON.parse(cached);if(Date.now()-saved.time<6*60*60*1000)setHeroPool(saved.rows)}catch{}}
  try{const response=await fetch('https://api.opendota.com/api/heroStats');if(!response.ok)throw new Error('Hero data unavailable');const rows=await response.json();if(!Array.isArray(rows)||!rows.length)throw new Error('Empty hero list');try{localStorage.setItem(cacheKey,JSON.stringify({time:Date.now(),rows}))}catch{}setHeroPool(rows)}catch{if(heroes.length===seedHeroes.length)$('heroPoolStatus').textContent='Не удалось загрузить полный список героев — проверь интернет';}
}
const roleDefault={carry:['Джаггернаут','Фантомка','Урса'],mid:['Шторм','Пак','Лина'],offlane:['Тайдхантер','Марс','Кентавр']};
let position=5,targetTeam='ally',allies=[],enemies=[];const teamPositions={ally:{},enemy:{}};
const matchupCache=new Map();let matchupLoads=new Set();
const $=id=>document.getElementById(id);
const search=$('heroSearch'), results=$('searchResults');
function draw(){
  document.querySelector('.team-card.ally').classList.toggle('target-team',targetTeam==='ally');document.querySelector('.team-card.enemy').classList.toggle('target-team',targetTeam==='enemy');
  document.querySelectorAll('[data-target-team]').forEach(button=>button.classList.toggle('active',button.dataset.targetTeam===targetTeam));
  drawTeam(allies,'allySlots','allyCount','Союзник');drawTeam(enemies,'enemySlots','enemyCount','Противник');drawRecommendations();drawWinChance();
}
const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
const logit=p=>Math.log(clamp(p,.01,.99)/(1-clamp(p,.01,.99)));
function heroBaseRate(hero){return hero?.stats?.smoothedRate??(hero?.stats?.winRate?hero.stats.winRate/100:.5)}
function heroCanPlayPosition(hero,pos){
  const seed=seedHeroes.find(x=>x.name===hero.name);if(seed&&seed.roles.includes(positionRoles[pos]))return true;
  if(pos===4||pos===5)return supportHeroKeys.has(hero.key);
  if(seed)return false;
  const roles=hero.apiRoles||hero.roles||[];
  if(pos===1)return roles.includes('carry');
  if(pos===2)return midHeroKeys.has(hero.key)||(roles.includes('escape')&&roles.includes('nuker')&&!roles.includes('durable')&&!roles.includes('initiator')&&!roles.includes('carry'));
  if(pos===3)return (roles.includes('initiator')&&(roles.includes('durable')||roles.includes('nuker')))||(roles.includes('durable')&&!roles.includes('carry')&&!roles.includes('support'));
  return roles.includes('support');
}
function estimateChance(allyHeroes,enemyHeroes){
  if(!allyHeroes.length||!enemyHeroes.length)return {chance:.5,pairs:0,sampleGames:0};
  const allyBase=allyHeroes.reduce((s,h)=>s+logit(heroBaseRate(h)),0)/allyHeroes.length;
  const enemyBase=enemyHeroes.reduce((s,h)=>s+logit(heroBaseRate(h)),0)/enemyHeroes.length;
  let matchupDelta=0,pairs=0,sampleGames=0;
  for(const ally of allyHeroes){for(const enemy of enemyHeroes){const forward=matchupCache.get(ally.id)?.get(enemy.id),reverse=matchupCache.get(enemy.id)?.get(ally.id);let row,allyWins,games;if(forward&&forward.games_played>=20){row=forward;games=Number(row.games_played);allyWins=Number(row.wins)}else if(reverse&&reverse.games_played>=20){row=reverse;games=Number(row.games_played);allyWins=games-Number(row.wins)}else continue;const base=heroBaseRate(ally),adjusted=(allyWins+base*250)/(games+250),weight=games/(games+250);matchupDelta+=(logit(adjusted)-logit(base))*weight;pairs++;sampleGames+=games}}
  const draftDelta=allyBase-enemyBase+(pairs?matchupDelta/pairs:0);
  return {chance:clamp(1/(1+Math.exp(-draftDelta)),.35,.65),pairs,sampleGames};
}
function drawWinChance(){
  const allyHeroes=allies.map(n=>heroes.find(h=>h.name===n)).filter(Boolean),enemyHeroes=enemies.map(n=>heroes.find(h=>h.name===n)).filter(Boolean);
  const details=$('chanceDetails'),meta=$('chanceMeta');details.classList.remove('error');
  if(!allyHeroes.length||!enemyHeroes.length){$('allyChance').textContent='50%';$('enemyChance').textContent='50%';$('chanceBar').style.width='50%';meta.textContent='Добавь минимум по герою в обе команды';details.textContent='Покажу оценку после появления пиков с обеих сторон. Ростер, винрейты и матчапы берутся из OpenDota.';return}
  const draft=estimateChance(allyHeroes,enemyHeroes),chance=draft.chance*100,enemyChance=100-chance;
  $('allyChance').textContent=`${Math.round(chance)}%`;$('enemyChance').textContent=`${Math.round(enemyChance)}%`;$('chanceBar').style.width=`${chance}%`;
  const missing=allies.length<5||enemies.length<5?` · драфт неполный (${allies.length}/5 и ${enemies.length}/5)`:'';
  meta.textContent=draft.pairs?`Учтено матчапов: ${draft.pairs} · ${draft.sampleGames.toLocaleString('ru-RU')} игр`:'Пока только общий винрейт героев';
  details.textContent=`Оценка рассчитана по общему винрейту выбранных героев${draft.pairs?` и ${draft.pairs} доступным матчапам`:''}.${missing} Данные по рангам и командной сыгранности не учтены; это ориентир, а не точный прогноз.`;
}
async function loadMatchupsForDraft(){
  const allyHeroes=allies.map(n=>heroes.find(h=>h.name===n)).filter(Boolean),enemyHeroes=enemies.map(n=>heroes.find(h=>h.name===n)).filter(Boolean);
  const candidateIds=allyHeroes.length&&enemyHeroes.length?heroes.filter(h=>heroCanPlayPosition(h,position)).map(scoreHero).filter(Boolean).sort((a,b)=>b.score-a.score).slice(0,3).map(x=>x.hero.id):[];
  const ids=[...new Set([...allies,...enemies].map(n=>heroes.find(h=>h.name===n)?.id).filter(Boolean).concat(candidateIds).filter(Boolean))];let loadedAny=false;
  for(const id of ids){
    if(matchupCache.has(id)||matchupLoads.has(id))continue;matchupLoads.add(id);
    try{const response=await fetch(`https://api.opendota.com/api/heroes/${id}/matchups`);if(!response.ok)throw new Error();const rows=await response.json();const map=new Map(rows.map(row=>[Number(row.hero_id),row]));matchupCache.set(id,map);loadedAny=true;drawWinChance();drawRecommendations()}
    catch{$('chanceDetails').classList.add('error');$('chanceDetails').textContent='Не удалось загрузить статистику матчапов OpenDota. Проверь подключение; пока показан расчёт по общему винрейту.'}
    finally{matchupLoads.delete(id)}
  }
  if(loadedAny){const nextIds=[...allies,...enemies].map(n=>heroes.find(h=>h.name===n)?.id).filter(Boolean).concat(heroes.filter(h=>heroCanPlayPosition(h,position)).map(scoreHero).filter(Boolean).sort((a,b)=>b.score-a.score).slice(0,3).map(x=>x.hero.id)).filter(id=>id&&!matchupCache.has(id)&&!matchupLoads.has(id));if(nextIds.length)loadMatchupsForDraft()}
}
function drawTeam(team,id,countId,empty){
  const side=id==='allySlots'?'ally':'enemy',positions=teamPositions[side];
  $(countId).textContent=`${team.length} / 5`;
  const slots=Array.from({length:5},(_,i)=>team.find(name=>Number(positions[name])===i+1)||null);
  $(id).innerHTML=Array.from({length:5},(_,i)=>slots[i]?`<div class="slot filled"><select class="position-select" data-side="${side}" data-position-hero="${slots[i]}" aria-label="Позиция героя ${slots[i]}">${[1,2,3,4,5].map(p=>`<option value="${p}" ${Number(positions[slots[i]])===p?'selected':''}>П${p}</option>`).join('')}</select>${portrait(slots[i])}<span class="slot-hero-name">${slots[i]}</span><button data-side="${side}" data-remove-name="${slots[i]}" aria-label="Убрать ${slots[i]}">×</button></div>`:`<div class="slot"><span>Позиция ${i+1}</span><span>—</span></div>`).join('');
  $(id).querySelectorAll('[data-remove-name]').forEach(b=>b.onclick=()=>{const name=b.dataset.removeName;delete positions[name];team.splice(team.indexOf(name),1);draw();loadMatchupsForDraft()});
  $(id).querySelectorAll('[data-position-hero]').forEach(select=>select.onchange=()=>{const heroName=select.dataset.positionHero,oldPos=Number(positions[heroName]),newPos=Number(select.value),other=team.find(n=>n!==heroName&&Number(positions[n])===newPos);positions[heroName]=newPos;if(other)positions[other]=oldPos;draw();loadMatchupsForDraft()});
}
function scoreHero(h){
  const chosen=new Set([...allies,...enemies]);if(chosen.has(h.name))return null;
  let score=50, reasons=[];
  const allyHeroes=allies.map(n=>heroes.find(x=>x.name===n)).filter(Boolean),enemyHeroes=enemies.map(n=>heroes.find(x=>x.name===n)).filter(Boolean);
  const my=targetTeam==='ally'?allyHeroes:enemyHeroes,foe=targetTeam==='ally'?enemyHeroes:allyHeroes;
  const myTags=my.flatMap(x=>x.tags||[]), foeTags=foe.flatMap(x=>x.tags||[]);
  const role=positionRoles[position],fitsPosition=heroCanPlayPosition(h,position);if(fitsPosition){score+=18;reasons.push(`Подходит на позицию ${position} («${positionLabels[position]}»)`)}else score-=24;
  for(const tag of h.tags||[]) if(!myTags.includes(tag)&&['инициация','массовый контроль','урон по строениям','дальний урон'].includes(tag)){score+=4;reasons.push(`Добавляет команде: ${tag}`)}
  for(const f of foe)for(const c of h.counters||[])if((f.tags||[]).includes(c)){score+=10;reasons.push(`Полезен против героя «${f.name}»`)}
  for(const w of h.weak||[])if(foeTags.includes(w)){score-=7;reasons.push(`Уязвим к вражескому ${w}`)}
  if(!my.length&&!foe.length)score=50+(fitsPosition?18:0);
  const canEstimate=allyHeroes.length>0&&enemyHeroes.length>0,baseChance=canEstimate?estimateChance(allyHeroes,enemyHeroes).chance:null;
  const afterChance=canEstimate?(targetTeam==='ally'?estimateChance([...allyHeroes,h],enemyHeroes).chance:estimateChance(allyHeroes,[...enemyHeroes,h]).chance):null;
  const lift=canEstimate?(afterChance-baseChance)*100:null,teamLift=lift===null?null:(targetTeam==='ally'?lift:-lift);
  if(lift!==null){score+=teamLift*3;reasons.push(`Влияние на шанс союзников: ${lift>=0?'+':''}${lift.toFixed(1)} п.п.`)}
  return {hero:h,score:Math.max(15,Math.min(96,score)),lift,teamLift,reasons:[...new Set(reasons)].slice(0,2)};
}
function drawRecommendations(){
  const activeTeam=targetTeam==='ally'?allies:enemies,positions=teamPositions[targetTeam],teamLabel=targetTeam==='ally'?'Союзникам':'Соперникам',occupied=activeTeam.some(n=>Number(positions[n])===position);
  const pool=heroes.filter(h=>heroCanPlayPosition(h,position)).map(scoreHero).filter(Boolean).sort((a,b)=>b.score-a.score).slice(0,3);
  $('recommendMeta').textContent=`${teamLabel} · позиция ${position} · ${positionLabels[position]}${occupied?' · позиция уже занята':''}`;
  $('recommendations').innerHTML=pool.length?pool.map((o,i)=>`<article class="rec-card"><div class="rec-top">${portrait(o.hero.name)}<strong>${o.hero.name}</strong><span class="score">${i===0?'ЛУЧШИЙ ПИК':'ВАРИАНТ'}</span></div><p>${o.reasons.join('. ')||`Подходит на позицию ${position}.`}${o.hero.stats?` · Винрейт ${o.hero.stats.winRate.toFixed(1)}% из ${o.hero.stats.picks.toLocaleString('ru-RU')} матчей`:''}</p><div class="rec-tags">${(o.hero.tags||[]).slice(0,2).map(t=>`<span>${t}</span>`).join('')}</div><div class="pick-actions"><span class="chance-lift ${o.lift===null?'neutral':o.teamLift>=0?'positive':'negative'}">${o.lift===null?'Добавь пики обеих команд':`Влияние на шанс союзников: ${o.lift>=0?'+':''}${o.lift.toFixed(1)} п.п.`}</span><button type="button" data-pick-team="${targetTeam}" data-hero="${o.hero.name}" ${occupied||activeTeam.length>=5?'disabled':''}>＋ ${teamLabel} · П${position}</button></div></article>`).join(''):'<div class="empty-state">Для этой позиции пока нет подходящих героев в списке.</div>';
  $('recommendations').querySelectorAll('[data-pick-team]').forEach(b=>b.onclick=()=>addHero(b.dataset.hero,b.dataset.pickTeam));
}
function selectTargetTeam(side){targetTeam=side;draw();loadMatchupsForDraft();if(search.value.trim())showOptions()}
function addHero(name,side=targetTeam){const dest=side==='ally'?allies:enemies,positions=teamPositions[side];if(dest.length>=5||allies.includes(name)||enemies.includes(name))return;if(dest.some(n=>Number(positions[n])===position))return;positions[name]=position;dest.push(name);const usedPosition=position,nextFree=[1,2,3,4,5].filter(p=>!dest.some(n=>Number(positions[n])===p)),lower=nextFree.filter(p=>p<usedPosition);position=lower[lower.length-1]||nextFree[nextFree.length-1]||usedPosition;document.querySelectorAll('.position').forEach(b=>b.classList.toggle('active',Number(b.dataset.position)===position));search.value='';results.classList.remove('show');draw();loadMatchupsForDraft()}
function showOptions(){const q=search.value.trim().toLocaleLowerCase('ru');if(!q){results.classList.remove('show');return}const matches=heroes.filter(h=>`${h.name} ${h.englishName||''}`.toLocaleLowerCase('ru').includes(q)&&!allies.includes(h.name)&&!enemies.includes(h.name)).slice(0,7);results.innerHTML=matches.length?matches.map(h=>`<div class="search-option">${portrait(h.name)}<span>${h.name}</span><small>${h.roles.map(r=>roleNames[r]).join(' · ')}</small><button type="button" data-name="${h.name}">＋ ${targetTeam==='ally'?'Союзникам':'Соперникам'} · П${position}</button></div>`).join(''):'<div class="search-option">Не найдено в списке героев</div>';results.classList.add('show')}
search.addEventListener('input',showOptions);results.addEventListener('click',e=>{const btn=e.target.closest('button[data-name]');if(!btn)return;e.preventDefault();e.stopPropagation();addHero(btn.dataset.name)});$('clearSearch').onclick=()=>{search.value='';results.classList.remove('show');search.focus()};document.addEventListener('click',e=>{if(!e.target.closest('.search'))results.classList.remove('show')});document.querySelectorAll('.position').forEach(b=>b.onclick=()=>{position=Number(b.dataset.position);document.querySelectorAll('.position').forEach(x=>x.classList.toggle('active',x===b));draw();loadMatchupsForDraft()});document.querySelectorAll('[data-target-team]').forEach(b=>b.onclick=()=>selectTargetTeam(b.dataset.targetTeam));document.querySelector('.team-card.ally').addEventListener('click',e=>{if(e.target.closest('button,select'))return;selectTargetTeam('ally')});document.querySelector('.team-card.enemy').addEventListener('click',e=>{if(e.target.closest('button,select'))return;selectTargetTeam('enemy')});draw();loadHeroPool();
