import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { marielle } from "../../assets/images";

function Testimonials() {
    return (
        <section id="testimonials" className="md:px-12 px-6 py-16 bg-slate-100">
            <h2 className="text-center text-indigo-500 font-bold text-2xl">
                Testimonials
            </h2>
            <h3 className="text-center text-gray-700 text-md mb-8">
                These are the testimonials of people I've been working with
            </h3>
            <div className="flex justify-center items-center">
                <article className="w-full md:w-80 shadow-lg p-5 bg-white">
                    <div className="flex justify-between items-stretch pb-5">
                        <div>
                            <h3>Randrianjohany Marielle</h3>
                            <span className="italic text-xs">
                                - CEO of Accessoires et déco bohème
                            </span>
                        </div>
                        <img
                            src={marielle}
                            className="w-10 h-10 object-cover"
                            alt=""
                        />
                    </div>
                    <p className="leading-5 tracking-wide">
                        <FaQuoteLeft className="text-green-500" />
                        Premièrement, le site a permis à ma page d'être visible
                        et d'attirer de plus vaste cible potentiel. Il a aussi
                        professionnalisé l'image de mon produit.{" "}
                        <FaQuoteRight className="text-green-500" />
                    </p>
                </article>
            </div>
        </section>
    );
}

export default Testimonials;
