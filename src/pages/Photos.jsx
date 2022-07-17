import './Photos.css'
import Gallery from 'react-photo-gallery'

const Photos = () => {
  const photos = [
    {
      src: '/gallery/49thst.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/gallery/albertlittleisland.jpg',
      width: 4,
      height: 3
    },
    {
      src: '/gallery/albertoahu.jpg',
      width: 3,
      height: 2
    },
    {
      src: '/gallery/albertportrait.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/gallery/alcatraz.jpg',
      width: 1,
      height: 1
    },
    {
      src: '/gallery/antelopecanyon.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/gallery/azorescoast.jpg',
      width: 4,
      height: 3
    },
    {
      src: '/gallery/azorescoast2.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/gallery/azoreslakes.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/gallery/bryantpark.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/gallery/cabonight.jpg',
      width: 133,
      height: 75
    },
    {
      src: '/gallery/costarica.jpg',
      width: 4,
      height: 3
    },
    {
      src: '/gallery/costaricasunset.jpg',
      width: 4,
      height: 3
    },
    {
      src: '/gallery/honolulunight.jpg',
      width: 3,
      height: 2
    },
    {
      src: '/gallery/jamaica.jpg',
      width: 233,
      height: 173
    },
    {
      src: '/gallery/littleisland.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/gallery/littleislandnight.jpg',
      width: 4,
      height: 3
    },
    {
      src: '/gallery/littleislandnightcoast.jpg',
      width: 144,
      height: 109
    },
    {
      src: '/gallery/littleislandsunset.jpg',
      width: 4,
      height: 3
    },
    {
      src: '/gallery/mainstfire.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/gallery/met.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/gallery/oahubeach.jpg',
      width: 3,
      height: 2
    },
    {
      src: '/gallery/oculus.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/gallery/paintedladies.jpg',
      width: 4,
      height: 3
    },
    {
      src: '/gallery/palace.jpg',
      width: 4,
      height: 3
    },
    {
      src: '/gallery/purduegym.jpg',
      width: 6,
      height: 11
    },
    {
      src: '/gallery/sdcoast.jpg',
      width: 403,
      height: 227
    },
    {
      src: '/gallery/sdcoastpano.jpg',
      width: 16350,
      height: 3858
    },
    {
      src: '/gallery/sealion.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/gallery/smores.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/gallery/smoresandmom.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/gallery/surf.jpg',
      width: 192,
      height: 128
    },
    {
      src: '/gallery/waikikipano.jpg',
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