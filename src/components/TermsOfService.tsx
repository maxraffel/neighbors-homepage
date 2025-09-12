export function TermsOfService() {
  return (
    <section
      className="dark bg-background py-16 md:py-24 text-foreground"
      aria-labelledby="article-title"
    >
      {/* Content Container - Centered with max width */}
      <div className="dark mx-auto max-w-3xl px-6">
        {/* Article Container with Vertical Layout */}
        <article className="flex flex-col gap-12 md:gap-16">
          {/* Article Header Section */}
          <div className="flex flex-col gap-8">
            {/* Title and Meta Information Block */}
            <div className="flex flex-col gap-4 md:gap-5">

              {/* Article Main Title */}
              <h1 id="article-title" className="heading-xl">
                Terms of Service
              </h1>

              <p className="text-muted-foreground text-lg">
                Last updated August 20, 2025
              </p>
            </div>
          </div>

          {/* Article Content Section */}
          <div className="flex flex-col gap-8">

            <h2
              className="text-3xl font-semibold"
            >
              Informational Purposes Only
            </h2>

            <p className="leading-7 text-muted-foreground">
              The content on this website is for general informational purposes and should not be considered financial, legal, or tax advice. For personalized advice, please consult a licensed financial professional.
            </p>

            <h2
              className="text-3xl font-semibold"
            >
              No Guarantee
            </h2>
            <p className="leading-7 text-muted-foreground">
              While we strive for accuracy, we do not guarantee that the information on this site is complete, reliable, or up to date.
            </p>
         
            <h2
              className="text-3xl font-semibold"
            >
              Limitation of Liability
            </h2>
            <p className="leading-7 text-muted-foreground">
              Neighbors Wealth Management is not liable for any losses or damages arising from your use of this website or reliance on its content.
            </p>

            <h2
              className="text-3xl font-semibold"
            >
              Third-Party Links
            </h2>
            <p className="leading-7 text-muted-foreground">
              Our website may include links to other websites. We are not responsible for the content or practices of those third parties.
            </p>
            <h2
              className="text-3xl font-semibold"
            >
              Intellectual Property
            </h2>
            <p className="leading-7 text-muted-foreground">
              All content on this site, including text, images, and logos, is the property of Neighbors Wealth Management unless otherwise noted. You may not copy or reuse it without permission.
            </p>

            <h2
              className="text-3xl font-semibold"
            >
              Contact Us:
            </h2>
            <p className="leading-7 text-muted-foreground">
              If you have any questions about these terms, please contact us at:<br></br>Email: <a href="mailto:scott@neighborsgrp.com" className="underline">scott@neighborsgrp.com</a><br></br>Phone: <a href="tel:+18632247471" className="underline">+1 (863) 224-7471</a>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
