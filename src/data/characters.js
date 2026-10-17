// Character data. Original, short summaries written for this showcase.
// `accent` tints each character's glow and fallback silhouette.
export const characters = [
{
  id: 'nagato',
  name: 'Nagato Uzumaki',
  realName: 'Nagato Uzumaki',
  form: 'Nagato Uzumaki (Original Body)',
  title: 'The Man Behind Pain',
  alias: 'Pain, The Rinnegan User',
  village: 'Amegakure (Hidden Rain Village)',
  role: 'True controller of the Six Paths of Pain and leader of Akatsuki',
  abilities: [
    'Rinnegan',
    'Six Paths Technique',
    'Shinra Tensei',
    'Chibaku Tensei',
    'Summoning Technique',
    'Shared Vision'
  ],
  personality:
    'Intelligent, solemn and deeply affected by loss. Nagato believes that experiencing pain can force humanity to understand one another, though his pursuit of peace becomes increasingly extreme.',
  backstory:
    'Born during a time of war, Nagato lost his parents as a child and later lost Yahiko, his closest friend. Possessing the legendary Rinnegan, he took control of Akatsuki and used six corpses as remote-controlled bodies known as the Six Paths of Pain. While the world saw Pain as a godlike leader, Nagato was the true force behind the six bodies.',
  accent: '#9b59ff',
},
  {
  id: 'pain',
  name: 'Pain',
  realName: 'Yahiko',
  form: 'Deva Path of the Six Paths of Pain',
  title: 'The God of Amegakure',
  alias: 'Pain, Deva Path',
  village: 'Amegakure (Hidden Rain Village)',
  role: 'The primary body controlled by Nagato and the public face of Akatsuki',
  abilities: [
    'Rinnegan',
    'Shinra Tensei',
    'Banshō Ten’in',
    'Chibaku Tensei',
    'Six Paths Technique'
  ],
  personality:
    'Cold, authoritative and uncompromising. Speaks with absolute conviction about suffering, peace and the cycle of hatred.',
  backstory:
    'Yahiko was one of the original founders of Akatsuki, alongside Nagato and Konan. After Yahiko died, Nagato used his body as the Deva Path, the most prominent of the Six Paths of Pain. Through this body, Nagato declared his philosophy to the world and led Akatsuki from the shadows.',
  accent: '#ff6a2b',
},
  {
    id: 'konan',
    name: 'Konan',
    realName: 'Konan',
    form: 'Angel of Amegakure',
    title: 'The Paper Angel',
    alias: 'Angel of God',
    village: 'Amegakure (Hidden Rain Village)',
    role: 'Co-founder and Pain’s partner',
    abilities: ['Paper manipulation', 'Shikigami no Mai', 'Paper clones', 'Explosive tags'],
    personality:
      'Quiet, loyal and fiercely protective. Her devotion to her teammates runs deeper than her calm exterior suggests.',
    backstory:
      'A war orphan who grew up alongside Nagato and Yahiko, Konan helped found Akatsuki to protect the village they loved. She stayed at Nagato’s side to the end.',
    accent: '#7aa8ff',
  },
  {
    id: 'juzo',
    name: 'Jūzō Biwa',
    realName: 'Jūzō Biwa',
    form: 'Jūzō Biwa',
    title: 'Wielder of the Executioner’s Blade',
    alias: 'Rogue Swordsman of the Mist',
    village: 'Kirigakure (Hidden Mist Village)',
    role: 'Operative, Itachi’s original partner',
    abilities: ['Kubikiribōchō', 'Water Release', 'Silent Killing', 'Mist Cloaking'],
    personality:
      'Gruff, pragmatic and battle-tested. Highly professional in combat with a blunt sense of honor.',
    backstory:
      'A former member of the Seven Ninja Swordsmen of the Mist who deserted his home to join Akatsuki. He served as Itachi Uchiha’s first partner until a fatal confrontation in the Land of Water.',
    accent: '#3a7bd5',
  },
  {
    id: 'itachi',
    name: 'Itachi Uchiha',
    realName: 'Itachi Uchiha',
    form: 'Itachi Uchiha',
    title: 'The Prodigy Who Carried the Truth',
    alias: 'Weasel',
    village: 'Konohagakure (Hidden Leaf Village)',
    role: 'Elite operative, partnered with Kisame',
    abilities: ['Sharingan', 'Mangekyō Sharingan', 'Tsukuyomi', 'Amaterasu', 'Susanoo'],
    personality:
      'Reserved, gentle beneath the surface and ruthlessly disciplined. Always weighing the cost of every choice.',
    backstory:
      'A genius who rose through the ranks of the Leaf at a young age. His story ends up being one of sacrifice, shaped by a hidden mission few ever knew about.',
    accent: '#d11a2a',
  },
  {
    id: 'kisame',
    name: 'Kisame Hoshigaki',
    realName: 'Kisame Hoshigaki',
    form: 'Kisame Hoshigaki',
    title: 'Monster of the Hidden Mist',
    alias: 'Tailless Tailed Beast',
    village: 'Kirigakure (Hidden Mist Village)',
    role: 'Swordsman, Itachi’s partner',
    abilities: ['Samehada', 'Water Release', 'Massive chakra reserves', 'Water Prison'],
    personality:
      'Blunt, cheerful about battle and surprisingly loyal. Respects strength and honesty above all.',
    backstory:
      'One of the Seven Swordsmen of the Mist, Kisame left his village after growing disillusioned with its orders and found a place beside Itachi in Akatsuki.',
    accent: '#3fb6d6',
  },
  {
    id: 'deidara',
    name: 'Deidara',
    realName: 'Deidara',
    form: 'Deidara',
    title: 'Art Is an Explosion',
    alias: 'The Mad Bomber',
    village: 'Iwagakure (Hidden Rock Village)',
    role: 'Explosives specialist, Sasori’s former partner',
    abilities: ['Explosive clay', 'C1–C4 detonations', 'Mouth-hands', 'Clay clones'],
    personality:
      'Brash, theatrical and proud. He believes true art is fleeting and spectacular.',
    backstory:
      'A rogue Rock ninja who turned clay into volatile sculptures, Deidara joined Akatsuki after a defeat reshaped his view of art and power.',
    accent: '#ffc24a',
  },
  {
    id: 'sasori',
    name: 'Sasori',
    realName: 'Sasori of the Red Sand',
    form: 'Sasori',
    title: 'Master of Puppets',
    alias: 'Sasori of the Red Sand',
    village: 'Sunagakure (Hidden Sand Village)',
    role: 'Puppeteer, Deidara’s former partner',
    abilities: ['Puppet Technique', 'Poison craft', 'Iron Sand', 'Hiruko'],
    personality:
      'Patient, cold and obsessed with permanence. He values lasting art over fleeting moments.',
    backstory:
      'A prodigy who turned grief into craft, Sasori transformed himself into a living puppet and became one of the most feared puppeteers in the Sand.',
    accent: '#b0412f',
  },
  {
    id: 'hidan',
    name: 'Hidan',
    realName: 'Hidan',
    form: 'Hidan',
    title: 'The Immortal Zealot',
    alias: 'Jashin’s Disciple',
    village: 'Yugakure (Hidden Hot Springs Village)',
    role: 'Zealot, Kakuzu’s partner',
    abilities: ['Immortality', 'Jashin ritual', 'Triple-bladed scythe', 'Curse binding'],
    personality:
      'Loud, profane and fanatically devoted to his faith. Treats every fight as a sacred rite.',
    backstory:
      'A follower of a violent religion, Hidan found in Akatsuki a place that tolerated his rituals and paired him with an equally ruthless partner.',
    accent: '#c9c9d6',
  },
  {
    id: 'kakuzu',
    name: 'Kakuzu',
    realName: 'Kakuzu',
    form: 'Kakuzu',
    title: 'The Treasurer of Akatsuki',
    alias: 'Bounty Hunter',
    village: 'Takigakure (Hidden Waterfall Village)',
    role: 'Treasurer, Hidan’s partner',
    abilities: ['Earth Grudge Fear', 'Five hearts', 'Multi-element jutsu', 'Thread-based combat'],
    personality:
      'Stern, miserly and pragmatic. Distrusts everyone and measures worth in money.',
    backstory:
      'A veteran who has outlived generations of shinobi, Kakuzu keeps his long life going by taking hearts from those he defeats.',
    accent: '#7a5cff',
  },
  {
    id: 'zetsu',
    name: 'Zetsu',
    realName: 'Zetsu',
    form: 'White Zetsu & Black Zetsu',
    title: 'The Spy Between Worlds',
    alias: 'Plant Man',
    village: 'Unknown',
    role: 'Spy and informant',
    abilities: ['Earth Release tracking', 'Cannibalism', 'Spore clones', 'Infiltration'],
    personality:
      'Two voices in one body: one cheerful and curious, the other cold and calculating.',
    backstory:
      'Zetsu quietly gathered intelligence for Akatsuki, moving unseen through earth and stone while pursuing a hidden agenda.',
    accent: '#5fcf6d',
  },
  {
    id: 'tobi',
    name: 'Tobi',
    realName: 'Obito Uchiha',
    form: 'Tobi / Obito Uchiha',
    title: 'The Masked Mastermind',
    alias: 'Tobi',
    village: 'Konohagakure (Hidden Leaf Village)',
    role: 'Hidden mastermind of Akatsuki',
    abilities: ['Kamui', 'Sharingan', 'Wood Release', 'Space-time ninjutsu'],
    personality:
      'Plays the fool in public while hiding a patient, bitter and calculating mind.',
    backstory:
      'Believed dead long ago, Obito resurfaced behind a mask and used Akatsuki as a tool for a sweeping plan to remake the world.',
    accent: '#ff8a1f',
  },
  {
    id: 'madara',
    name: 'Madara Uchiha',
    realName: 'Madara Uchiha',
    form: 'Madara Uchiha',
    title: 'Ghost of the Uchiha',
    alias: 'The Second Six Paths',
    village: 'Konohagakure (Co-founder)',
    role: 'True Visionary & Ultimate Mastermind',
    abilities: ['Perfect Susanoo', 'Eternal Mangekyō Sharingan', 'Rinnegan', 'Wood Release', 'Tengai Shinsei'],
    personality:
      'Imposing, fiercely proud and commandingly formidable. Possesses an unshakeable belief that ultimate power and control are necessary to establish unbroken peace.',
    backstory:
      'The legendary leader of the Uchiha clan who co-founded Konohagakure alongside Hashirama Senju. Disillusioned by the endless cycle of hatred, Madara orchestrated Akatsuki from behind the scenes of history to enact the Eye of the Moon Plan.',
    accent: '#990000',
  },
  {
    id: 'orochimaru',
    name: 'Orochimaru',
    realName: 'Orochimaru',
    form: 'Orochimaru (Former Member)',
    title: 'The Snake Sannin',
    alias: 'Snake Sannin',
    village: 'Konohagakure (Hidden Leaf Village)',
    role: 'Early member, left the organization',
    abilities: ['Snake summoning', 'Forbidden jutsu', 'Edo Tensei', 'Body transfer'],
    personality:
      'Curious, patient and unsettling. Driven by a hunger to understand every jutsu.',
    backstory:
      'One of the legendary Sannin, Orochimaru joined Akatsuki briefly before leaving, pursuing immortality and forbidden knowledge on his own terms.',
    accent: '#b57cff',
  },
]