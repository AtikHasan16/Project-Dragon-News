import React from "react";
import Marquee from "react-fast-marquee";

const NewsMarquee = () => {
  return (
    <div>
      <section className="flex items-center gap-6 bg-gray-300 p-3">
        <p className="bg-rose-700 text-white py-3 px-6 text-xl">Latest</p>
        <Marquee pauseOnHover={true} className="gap-4 font-bold text-gray-600">
          <p>
            Match Highlights: Germany vs Spain — as it happened. Biden Pledges
            Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package
            Yet.
          </p>
          <p>
            Match Highlights: Germany vs Spain — as it happened. Biden Pledges
            Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package
            Yet.
          </p>
        </Marquee>
      </section>
    </div>
  );
};

export default NewsMarquee;
