const Banner = () => {
    return (
        <div className="container mx-auto w-[93%] lg:w-full">
            <div className="relative bg-top min-h-[90vh] bg-cover bg-no-repeat  rounded-3xl py-10 md:pt-28" style={{backgroundImage:'url(https://s3-alpha-sig.figma.com/img/2b8f/f4be/d57b5fb5ad84c9f6a9b1eb9782e9b11b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bL~VLdsv-hRuXW~LIvEdTJne2vh1Xx0I33l~ndKRnQxhJymvKrRGAQEFj6iMi9FKXYy9o~JO5tu7XLBaZFPOH4LqdB1ePmBMeVtBNrYLyHB9~tf-aR3ia965uDSadF8m9QECrpx5TnhX8FdpUEJK92nCiDnMD3qy4lc3GT8VZPqyjoSswP6pCW-3xicITpf8wMaczVaq21kbMm970QukhImhycQ6E1BO9yVxh~vqHAWU9ktR5r5JO0tZR35aCGjHhASku9FbOXKdua1Dr2f2fU1yvc6bpsvSBuAb7eW0xUG8Nh0g9HaMoRoyKbhbq~4~Nm9nUEObIm~wIKpDZdh4YA__)'}}>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900 opacity-50 rounded-3xl"></div>
            <div className="relative hero-content text-center text-neutral-content">
                <div className="flex flex-col gap-6 lg:max-w-3xl">
                <h1 className="mb-5 text-5xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
                <p className="mb-5 text-white">Dive into the world of gastronomy with a bespoke cooking class, meticulously tailored to suit your unique palate and preferences. Explore a personalized culinary experience that promises to elevate your skills and tantalize your taste buds like never before.</p>
                <div className="flex gap-4 justify-center items-center">
                <button className="btn border px-4 py-2 border-emerald-500 bg-emerald-500 hover:bg-transparent hover:border-emerald-500 hover:text-emerald-500 rounded-3xl text-black">Explore Now</button>
                <button className="btn border px-4 py-2 rounded-3xl bg-transparent text-white hover:border-emerald-500 hover:text-emerald-500 hover:bg-transparent">Our Feedback</button>
                </div>
                </div>
            </div>
        </div>
        </div>
      );
};
 
export default Banner;