import React from "react";

function Section({ title, description }) {
    return (
        <section className="text-gray-700 pt-12">
            <h2 className="bg-gray-900 text-white px-4 py-2 mb-4 rounded-md">
                {title}
            </h2>
            <p className="indent-8 text-justify">{description}</p>
        </section>
    );
}

export default Section;
