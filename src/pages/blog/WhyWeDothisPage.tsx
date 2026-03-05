import React from 'react';
import BlogPost from '../../components/BlogPost';

const WhyWeDoThisPage = () => {
  return (
    <BlogPost
      title="Why We Do This: The Story Behind Captain Home Services and Austin Lake Management"
      date="March 5, 2025"
      author="Cameron Reid"
      category="Our Story"
      image="/aboutus.jpeg"
      excerpt="Cameron Reid grew up on Lake Austin and has spent over a decade working its waters. Here's why he and Kalyn Ohrt founded Captain Home Services — and why sustainable, manual hydrilla removal is the only approach they believe in."
      readTime="4 min read"
      slug="why-we-do-this-captain-home-services-austin-lake-management"
      keywords={[
        "Austin lake management",
        "Lake Austin weed removal",
        "Captain Home Services",
        "Cameron Reid Austin",
        "hydrilla removal Lake Austin",
        "sustainable aquatic weed removal",
        "local Austin lake service",
        "manual lake weed removal Austin",
        "Lake Austin conservation",
        "aquatic vegetation management Austin"
      ]}
    >
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">

        <p className="text-xl text-gray-800 font-medium leading-relaxed">
          Lake Austin is not just a backdrop for us. It is where we grew up, where weekends happen, and where this business began.
        </p>

        <p>
          My name is Cameron Reid. I have spent over ten years working on Lake Austin — learning its bends, its shallow runs, and the way the lake bottom changes from one cove to the next. Growing up here meant boating, skiing, swimming, and long afternoons at Emma Long with friends. The lake has always been the kind of place that slows you down in the middle of a fast city.
        </p>

        <figure className="my-10">
          <div className="rounded-xl overflow-hidden shadow-xl" style={{aspectRatio: '3/4', maxWidth: '480px', margin: '0 auto'}}>
            <img
              src="/aboutus.jpeg"
              alt="Cameron Reid and Kalyn Ohrt, co-founders of Captain Home Services and Austin Lake Management"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <figcaption className="text-center text-sm text-gray-500 mt-3">
            Cameron Reid and Kalyn Ohrt, co-founders of Captain Home Services
          </figcaption>
        </figure>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Starting Captain Home Services
        </h2>

        <p>
          I started this with my partner, Kalyn Ohrt, and a small group of people I have worked alongside, trained on the water, and trusted for years. Together we launched Captain Home Services and AustinLakeManagement.com to take on a problem that affects everyone who uses and loves this lake — and one we knew we could actually do something about.
        </p>

        <p>
          Hydrilla has been a persistent challenge on Lake Austin for decades. The traditional response has been what we call lawnmowing — cutting the top growth, leaving the roots, watching it come right back. We set out to do it differently. By removing entire plants, roots and tubers included, we give our customers results that last and reduce the rate at which hydrilla comes back.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          A Sustainable Approach to Hydrilla Control
        </h2>

        <p>
          Our method is manual and chemical-free. We pull weeds by hand from the lake bottom, carefully extracting root systems so there is nothing left behind to regrow. It takes skill, patience, and a real understanding of how Lake Austin works — which is why the experience our crew brings to every job matters so much.
        </p>

        <figure className="my-10">
          <div className="rounded-xl overflow-hidden shadow-xl" style={{aspectRatio: '4/3', maxWidth: '560px', margin: '0 auto'}}>
            <img
              src="/GabrielRamon.jpeg"
              alt="Captain Home Services crew removing aquatic weeds from Lake Austin by hand"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <figcaption className="text-center text-sm text-gray-500 mt-3">
            Our crew at work on Lake Austin — manual removal, root and all
          </figcaption>
        </figure>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The Team Behind the Work
        </h2>

        <p>
          The people we work with matter deeply to us. Most of our crew are people we have known for a long time — friends, trusted contacts, and people who share our values. We want everyone on this team to feel respected, proud of the work they do, and glad to show up. That culture shapes how we treat our customers and how carefully we treat the lake.
        </p>

        <p>
          When we are not on the water, we are usually riding bikes, cooking, traveling, chasing endurance events, or exploring national parks. We call South Austin home.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Why This Work Matters for Lake Austin
        </h2>

        <p>
          Lake Austin belongs to everyone who lives here — boaters, swimmers, families, and neighbors who just want a clear view from their dock. Hydrilla left unchecked chokes out native vegetation, disrupts fish habitat, and makes the water inaccessible. A sustainable, root-focused removal approach helps restore clear water and keeps the lake healthy for the long term.
        </p>

        <p>
          That is why we do this. Not just as a business, but because we genuinely care about the outcome — for our customers, for the lake, and for the community that calls Austin home.
        </p>

        <p className="text-xl text-gray-900 font-semibold mt-10 border-t border-gray-200 pt-8">
          — Cameron &amp; Kalyn
        </p>
      </div>
    </BlogPost>
  );
};

export default WhyWeDoThisPage;
