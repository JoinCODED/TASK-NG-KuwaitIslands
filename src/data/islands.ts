export interface Island {
  id: number;
  name: string;
  img: string;
  visitors: {
    name: string;
    phone: number;
  }[];
}

const islands: Island[] = [
  {
    id: 1,
    name: 'Failaka',
    img: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/90/7a/07.jpg',
    visitors: [],
  },
  {
    id: 2,
    name: 'Boubyan',
    img: 'http://photos.wikimapia.org/p/00/02/20/48/92_big.jpg',
    visitors: [],
  },
  {
    id: 3,
    name: 'Warbah',
    img: 'https://i.pinimg.com/originals/84/3c/9b/843c9b836c82c8010d84195f72cd6f66.jpg',
    visitors: [],
  },
  {
    id: 4,
    name: 'Umm Al Namil',
    img: 'https://static.trip101.com/main_pics/207924/medium.jpg',
    visitors: [],
  },
  {
    id: 5,
    name: 'Ouha',
    img: 'https://content.fortune.com/wp-content/uploads/2017/09/blk09-15_a.jpg',
    visitors: [],
  },
  {
    id: 6,
    name: 'Kubbar',
    img: 'https://vanakkamgulf.com/wp-content/uploads/2023/07/kub1.jpg',
    visitors: [],
  },
  {
    name: 'Umm Al Maradim',
    id: 7,
    img: 'https://www.kuna.net.kw/NewsPictures/2016/8/11/a95bfb4e-9189-41d7-9879-af4f9737aa81.jpg',
    visitors: [],
  },
  {
    id: 8,
    name: 'Qaruh',
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/c9/f9/90/caption.jpg?w=1200&h=-1&s=1',
    visitors: [],
  },
];

export default islands;
