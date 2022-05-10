import Button from "./Button"

const HeroSection = () => {
    return (
        <section className="flex flex-col md:flex-row-reverse  items-center m-auto">
            <figure className="flex justify-center md:justify-end md:w-9/12 md:mt-16 lg:w-8/12">
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img className="w-10/12 h-auto" src="/team.jpg" alt="team" />
            </figure>
            <article className="py-12 flex items-center text-center md:text-left flex-col w-9/12 md:absolute md:left-24  md:w-5/12 sm:w-7/12 lg:px-24">
                <p className=" sm:text-5xl text-4xl font-bold  text-gray-100">
                    Create amazing graphics
                </p>
                <p className="sm:text-2xl text-xl py-8 font-normal  text-gray-100">
                    Colaborate and create bratiful graphics with your team
                </p>
                <Button text="Start now" />
            </article>
        </section>
    )
}

export default HeroSection