import Image from "next/image";

export function Presentation() {
    return (
        <div className="flex flex-col sm:text-left text-center pt-40 z-30">
            {/* <Image className="grayscale absolute top-40 right-48 z-[-5] bg-white" src="/images/test.jpeg" width={300} height={300} alt="Placeholder image: grayscaled photography of mountains"/> */}
            <h1 className=" max-w-[62rem] font-heading text-3xl/normal sm:text-3xl/normal md:text-4xl/normal lg:text-5xl/normal">
                I&rsquo;m Raphaël, the web developper you need to fully express yourself.
            </h1>
        </div>
    );
}