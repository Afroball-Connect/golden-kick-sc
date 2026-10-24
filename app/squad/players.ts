export type PlayerProfile = {
  name: string;
  role: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';
  image: string;
  sourcePhoto: string;
};

const source = 'https://www.goldenkicksc.com/images/';

// These names, role groupings and portrait pairings are transcribed from the
// club's published Players page. The source does not identify a season.
export const playerGroups: { id: string; title: string; players: PlayerProfile[] }[] = [
  {
    id: 'goalkeepers', title: 'Goalkeepers', players: [
      { name: 'Emmanuel Kwadwo', role: 'Goalkeeper', image: '/images/squad/emmanuel-kwadwo.webp', sourcePhoto: `${source}3/4/2/c/2/342c290263dab79ae0a0dbd5841ed8505896e444-emma-gk.jpg` },
    ],
  },
  {
    id: 'defenders', title: 'Defenders', players: [
      { name: 'Richard Odartei Botchway', role: 'Defender', image: '/images/squad/richard-odartei-botchway.webp', sourcePhoto: `${source}a/4/5/2/e/a452e07a673e072129c00e9992d3d9fba421c71e-botway.jpg` },
      { name: 'Albert Afful', role: 'Defender', image: '/images/squad/albert-afful.webp', sourcePhoto: `${source}a/1/1/3/8/a1138be6cf30bca737e6b010a76bc04b1b54cca4-paa.jpg` },
      { name: 'Jonah Aryeetey', role: 'Defender', image: '/images/squad/jonah-aryeetey.webp', sourcePhoto: `${source}d/4/e/1/1/d4e1198912bb130589154ab50770a40ce0d7b29c-jonah.jpg` },
      { name: 'Ziblim Mohammed', role: 'Defender', image: '/images/squad/ziblim-mohammed.webp', sourcePhoto: `${source}7/9/c/6/4/79c644775009b7763775568fa1534057e683854b-ziblim.jpg` },
      { name: 'Kobina Amoah', role: 'Defender', image: '/images/squad/kobina-amoah.webp', sourcePhoto: `${source}8/f/f/d/1/8ffd16880df8b1f844750f50fb06b28bd4a78972-kobina-amoah.jpg` },
    ],
  },
  {
    id: 'midfielders', title: 'Midfielders', players: [
      { name: 'Evans Arhinful', role: 'Midfielder', image: '/images/squad/evans-arhinful.webp', sourcePhoto: `${source}f/6/5/f/3/f65f3a85edd532f82297dd2406f27e0e39b85009-messi.jpg` },
      { name: 'Roland Nana Poku Eshun', role: 'Midfielder', image: '/images/squad/roland-nana-poku-eshun.webp', sourcePhoto: `${source}b/6/b/a/a/b6baa26b18c14447f8143a3f96c3fc8fd85b3be4-1.jpg` },
      { name: 'Evans Gyau', role: 'Midfielder', image: '/images/squad/evans-gyau.webp', sourcePhoto: `${source}2/4/4/8/b/2448b69c86f52d8843027195480e411b944fb8bc-evans.jpg` },
      { name: 'Emmeanuel Tetteh', role: 'Midfielder', image: '/images/squad/emmeanuel-tetteh.webp', sourcePhoto: `${source}9/b/f/c/e/9bfce70a30cbfb3b8cc77f442673235a8c4701a3-dunkwa.jpg` },
      { name: 'Eugene Aidoo Frimpong', role: 'Midfielder', image: '/images/squad/eugene-aidoo-frimpong.webp', sourcePhoto: `${source}d/5/4/6/8/d54689f6ac85e45a37b4a7feaf0248f280228d86-1.jpg` },
      { name: 'Isaac Pappoe', role: 'Midfielder', image: '/images/squad/isaac-pappoe.webp', sourcePhoto: `${source}7/b/4/4/4/7b44475df29a7df7182320fe0e5c1a8e2332ea79-pappoe.jpg` },
      { name: 'Kweku Insaidoo Otoo', role: 'Midfielder', image: '/images/squad/kweku-insaidoo-otoo.webp', sourcePhoto: `${source}8/a/0/8/c/8a08c9630411b16c2475bedfaa8ea0383c9f0f7a-kokling.jpg` },
      { name: 'Mizak Asante', role: 'Midfielder', image: '/images/squad/mizak-asante.webp', sourcePhoto: `${source}b/c/2/b/2/bc2b247b0fea4d1603a6acb9915da67fd016c380-ze.jpg` },
      { name: 'Ishmael Nortey', role: 'Midfielder', image: '/images/squad/ishmael-nortey.webp', sourcePhoto: `${source}d/2/d/d/b/d2ddbaff7b6ca3cf81042c6d3e901c6dd5379ae3-nortey3.jpg` },
      { name: 'Ransford Koufie', role: 'Midfielder', image: '/images/squad/ransford-koufie.webp', sourcePhoto: `${source}5/b/5/9/a/5b59a973ec6b17258ffe7af719a3f1beaf669ba2-rans.jpg` },
    ],
  },
  {
    id: 'forwards', title: 'Forwards', players: [
      { name: 'Collins Tetteh', role: 'Forward', image: '/images/squad/collins-tetteh.webp', sourcePhoto: `${source}f/c/4/3/8/fc43881e72a827b87ca6ea54284d8d2c7a0044c5-collins.jpg` },
      { name: 'Joshua Fuseine', role: 'Forward', image: '/images/squad/joshua-fuseine.webp', sourcePhoto: `${source}f/5/9/b/d/f59bd17a7d05d7a5cb00bfa3b401f0099f3eb1e4-fuseine.jpg` },
      { name: 'Eleoenai Tompte', role: 'Forward', image: '/images/squad/eleoenai-tompte.webp', sourcePhoto: `${source}8/6/b/3/a/86b3aaf86752b5709b4a69470015ba18b0690a36-eleo.jpg` },
      { name: 'Ezekiel Nettey', role: 'Forward', image: '/images/squad/ezekiel-nettey.webp', sourcePhoto: `${source}a/f/3/8/1/af38131bbc3bf83db9fe97be41f6f382867c9976-ezikiel.jpg` },
      { name: 'Samuel Tetteh', role: 'Forward', image: '/images/squad/samuel-tetteh.webp', sourcePhoto: `${source}7/1/c/5/8/71c58877da3ffb92d7ca0608de41559bf83cab60-1.jpg` },
    ],
  },
];
