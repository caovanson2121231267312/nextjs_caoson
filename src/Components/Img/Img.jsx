import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
}

const MyImage = ({...props}) => {
  return (
    <Image
      loader={myLoader}
      src={props.src}
      alt={props.alt}
      width={500}
      height={500}
      className={props.className}
    />
  )
}

export default MyImage;