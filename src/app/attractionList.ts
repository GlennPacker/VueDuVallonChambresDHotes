import { TAttraction, Tag } from "@/components/attraction/attraction";

const attractionList: TAttraction[] = [
  {
    place: 'Laurière',
    img: 'Laurière.webp',
    text: 'Laurière is the neighboring town to Bersac just 5 mins drive or a great walk down a country track passing the river Rivalier and the Ambersac mountains.',
    tags: [
      Tag.LocalTown,
    ]
  },
  {
    place: 'Gartempe',
    img: 'Gartempe.webp',
    text: `The Gartempe is 7 mins away from the Chambres D'Hôtes. The river is 205km long and offers hiking, nature trails and white water activities (subject to rain).`,
    tags: [
      Tag.Lakes,
      Tag.Walks
    ]
  },
  {
    place: 'Viaduc de Rocherolles',
    img: 'viaduct.webp',
    text: `The Viaduc is 7 mins drive and a short walk along the Gartempe. This spot is great for the views, hiking, nature trails and white water activities (subject to rain).`,
    tags: [
      Tag.Lakes,
      Tag.Walks
    ]
  },
  {
    place: 'Bessines sur Gartempe',
    img: 'bessiness.webp',
    text: `The town of Bessines sur Gartempe is 8 mins drive away and has a local market, 2 supermarkets, bars, restaurants and small shops.`,
    tags: [
      Tag.LocalTown
    ]
  },
  {
    place: `Lac du pont à l'Age`,
    img: 'Lac du pont.webp',
    text: `Lac du pont à l'Age is 8 mins away from Vue du Vallon and is the closest large lake. It is a great spot for hiking and taking in the views.`,
    tags: [
      Tag.Lakes,
      Tag.Walks
    ]
  },
  {
    place: `Saint Sulpice Laurière`,
    img: 'Saint Sulpice Laurière lac.webp',
    text: `Saint Sulpice Laurière is 9 mins from Vue du Vallon and a favorite for fishing. It is also a great spot for hiking and dog walking.`,
    tags: [
      Tag.Lakes,
      Tag.Walks,
      Tag.LocalTown
    ]
  },
  {
    place: `Bois des Echelles`,
    img: 'Bois des Echelles.webp',
    text: `Saint Sulpice Laurière – Bois des Echelles is 10 mins drive from Vue du Vallon and offers great views over the valley below. It is a great spot for hiking, dog walking and paragliding (northerly winds).`,
    tags: [
      Tag.Walks,
      Tag.Woodlands,
      Tag.Paragliding
    ]
  },
  {
    place: `Étang de Sagnat`,
    img: 'Étang de Sagnat.webp',
    text: `Étang de Sagnat is a very pretty lake, just 10 mins drive away. There is a beach and children's playground as well as a bar/restaurant, fishing and hiking.`,
    tags: [
      Tag.Walks,
      Tag.Lakes,
      Tag.NatureWalk
    ]
  },
  {
    place: `La Jonchere`,
    img: 'La Jonchere.webp',
    text: `La Jonchere Saint Maurice is a 15 mins drive and has a great fishing lake.`,
    tags: [
      Tag.Walks,
      Tag.Lakes,
      Tag.NatureWalk
    ]
  },
  {
    place: `Saint Léger la Montagne`,
    img: 'Saint Léger la Montagne.webp',
    text: `Saint Léger la Montagne is 15 mins drive away and offers great views. There are mountain bike tracks and a paragliding take off (southerly winds).`,
    tags: [
      Tag.Walks,
      Tag.Paragliding,
      Tag.MountainBiking
    ]
  },
  {
    place: `Étang de la Brousse`,
    img: 'Étang de la Brousse.webp',
    text: `Étang de la Brousse in Marsac is a 18 mins drive away and a beautiful lake for picnics and barbecues. This spot is good for hiking, dog walks and fishing.`,
    tags: [
      Tag.Walks,
      Tag.Lakes,
      Tag.NatureWalk
    ]
  },
  {
    place: `Lac De Saint Pardoux`,
    img: 'Lac De Saint Pardoux.webp',
    text: `Lac de Saint Pardoux is 20 mins. The lake is the largest in the local area and great for swimming, watersports, beach, hiking and cycling.`,
    tags: [
      Tag.Walks,
      Tag.Lakes,
      Tag.NatureWalk,
      Tag.Cycling,
      Tag.Kayaking
    ]
  },
  {
    place: `Limoges`,
    img: 'Limoges.webp',
    text: `A 20 mins drive or short train journey away, the historic city of Limoges is famous for its fine porcelain. Lots of opportunities for shopping, dining and entertainment.`,
    tags: [
      Tag.LocalTown,
      Tag.Cycling
    ]
  },
  {
    place: `Le Taurion`,
    img: 'Le Taurion.webp',
    text: `Le Turion at Saint Laurent les Églises is 24 mins drive away and offers great views and a restuarant. Good for dog walks, hiking and fishing.`,
    tags: [
      Tag.Lakes,
    ]
  },
  {
    place: `Châtelus-le-Marcheix`,
    img: 'Châtelus-le-Marcheix.webp',
    text: `Châtelus-le-Marcheix is 30 mins away from Vue du Vallon and is on the pilgrimage path of the Way of St. James. This reservoir and beach offers water sports and magnificent views.`,
    tags: [
      Tag.Lakes,
      Tag.Beach,
      Tag.Kayaking
    ]
  },
  {
    place: `Lac d'Éguzon`,
    img: `Lac d'Éguzon.avif`,
    text: `Lac d'Éguzon is a 40 mins drive and one of the largest lakes of the area. It is a perfect spot for hiking, watersports, beach and dog walking and the nearby town of Crozant is well worth a visit.`,
    tags: [
      Tag.Lakes,
      Tag.Beach,
      Tag.Kayaking
    ]
  },
  {
    place: `Oradour-Sur-Glane`,
    img: `Oradour-Sur-Glane.avif`,
    text: `Oradour-Sur-Glane is a 45min drive. The ruined village of Oradour-Sur-Glane is a memorial to the 643 people who died in the closing moments of the Second World War.`,
    tags: [
      Tag.HistoricalInterest,
    ]
  },
  {
    place: `Chez Moutaud, le dolmen`,
    img: `Chez Moutaud, le dolmen.avif`,
    text: `Chez Moutaud, le dolmen is 50min drive from Vue Du Vallon.`,
    tags: [
    ]
  },
  {
    place: `Confolens`,
    img: `Confolens.avif`,
    text: `The town of Confolens is an hours drive from the Chambres D'Hôtes. It is a very pretty town with the Vienne river running through. The town offers several bars and good places to eat, as well as interesting small shops.`,
    tags: [
      Tag.LocalTown
    ]
  },
  {
    place: `Lac de Vassivière`,
    img: `Lac de Vassivière.avif`,
    text: `Lac de Vassivière is an hour's drive and is one of the largest lakes in France. It is offers water sports and is perfect for dog walking, hiking and cycling.`,
    tags: [
      Tag.Beach,
      Tag.Cycling,
      Tag.Kayaking,
      Tag.Lakes,
      Tag.Walks
    ]
  }
]

export default attractionList;