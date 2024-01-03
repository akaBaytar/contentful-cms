import hero from '/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad doloribus corrupti a ipsum eaque cum reiciendis
            quaerat. Debitis, exercitationem.
          </p>
        </div>
        <div className='image-container'>
          <img src={hero} alt='Contentful CMS' className='image' />
        </div>
      </div>
    </section>
  );
}

export default Hero