import './Photos.css'
import Gallery from 'react-photo-gallery'

const Photos = () => {
  const photos = [
    {
      src: '/compressed-gallery/49thst.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/compressed-gallery/albertlittleisland.jpg',
      width: 4,
      height: 3
    },
    {
      src: '/compressed-gallery/albertoahu.jpg',
      width: 3,
      height: 2
    },
    {
      src: '/compressed-gallery/albertportrait.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/compressed-gallery/alcatraz.jpg',
      width: 1,
      height: 1
    },
    {
      src: '/compressed-gallery/antelopecanyon.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/compressed-gallery/azorescoast.jpg',
      width: 4,
      height: 3
    },
    {
      src: '/compressed-gallery/azorescoast2.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/compressed-gallery/azoreslakes.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/compressed-gallery/bryantpark.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/compressed-gallery/cabonight.jpg',
      width: 133,
      height: 75
    },
    {
      src: '/compressed-gallery/costarica.jpg',
      width: 4,
      height: 3
    },
    {
      src: '/compressed-gallery/costaricasunset.jpg',
      width: 4,
      height: 3
    },
    {
      src: '/compressed-gallery/honolulunight.jpg',
      width: 3,
      height: 2
    },
    {
      src: '/compressed-gallery/jamaica.jpg',
      width: 233,
      height: 173
    },
    {
      src: '/compressed-gallery/littleisland.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/compressed-gallery/littleislandnight.jpg',
      width: 4,
      height: 3
    },
    {
      src: '/compressed-gallery/littleislandnightcoast.jpg',
      width: 144,
      height: 109
    },
    {
      src: '/compressed-gallery/littleislandsunset.jpg',
      width: 4,
      height: 3
    },
    {
      src: '/compressed-gallery/mainstfire.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/compressed-gallery/met.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/compressed-gallery/oahubeach.jpg',
      width: 3,
      height: 2
    },
    {
      src: '/compressed-gallery/oculus.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/compressed-gallery/paintedladies.jpg',
      width: 4,
      height: 3
    },
    {
      src: '/compressed-gallery/palace.jpg',
      width: 4,
      height: 3
    },
    {
      src: '/compressed-gallery/purduegym.jpg',
      width: 6,
      height: 11
    },
    {
      src: '/compressed-gallery/sdcoast.jpg',
      width: 403,
      height: 227
    },
    {
      src: '/compressed-gallery/sdcoastpano.jpg',
      width: 16350,
      height: 3858
    },
    {
      src: '/compressed-gallery/sealion.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/compressed-gallery/smores.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/compressed-gallery/smoresandmom.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/compressed-gallery/surf.jpg',
      width: 192,
      height: 128
    },
    {
      src: '/compressed-gallery/waikikipano.jpg',
      width: 16382,
      height: 3726
    }
  ];
  return (
    <div className="photos-header">
      {/* <h1>Photos will be here soon!</h1> */}
      <Gallery photos={photos} />
    </div>

    
  )
}
export default Photos;