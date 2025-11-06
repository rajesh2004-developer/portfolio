import Particles from './UI/Particles';

const Background = () => {
  return (
    <div className="w-screen h-screen fixed inset-0 -z-100 bg-[#333]">
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={500}
        particleSpread={10}
        speed={0.1111}
        particleBaseSize={80}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
};
export default Background;
