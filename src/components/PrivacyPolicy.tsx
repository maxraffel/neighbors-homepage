export function PrivacyPolicy() {
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
                Privacy Policy
              </h1>

              <p className="text-muted-foreground text-lg">
                Last updated August 20, 2025
              </p>

              {/* Article Description/Summary */}
              <p className="text-muted-foreground text-lg">
                At Neighbors Wealth Management (“we,” “our,” or “us”), we respect your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
              </p>
            </div>
          </div>

          {/* Article Content Section */}
          <div className="flex flex-col gap-6">

            {/* First Section - The King's Plan */}
            <h2
              className="text-3xl font-semibold"
            >
              Information We Collect
            </h2>

            <p className="leading-7 text-muted-foreground">
              We collect the following types of information to provide and improve our services:
            </p>

            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Information you provide: When you fill out a contact form, we may collect your name, email, phone number, and message.</li>
              <li>Automatically collected information: Like most websites, we may collect basic data such as your IP address, browser type, and pages you visit.</li>
              <li>Cookies: We may use cookies to improve your browsing experience. You can disable cookies in your browser settings.</li>
            </ul>

            <h2
              className="text-3xl font-semibold"
            >
              How We Use Your Information
            </h2>
            <div>
              <p className="leading-7 text-muted-foreground">
                We use the information we collect to:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Information you provide: When you fill out a contact form, we may collect your name, email, phone number, and message.</li>
                <li>Automatically collected information: Like most websites, we may collect basic data such as your IP address, browser type, and pages you visit.</li>
                <li>Cookies: We may use cookies to improve your browsing experience. You can disable cookies in your browser settings.</li>
              </ul>
              <p className="leading-7 text-muted-foreground">
                We <strong>do not sell or rent</strong> your personal information to third parties.
              </p>
            </div>
            
            <h2
              className="text-3xl font-semibold"
            >
              Sharing Your Information
            </h2>
            <p className="leading-7 text-muted-foreground">
              We may share your information only when required by law or to protect our legal rights.
            </p>

            <h2
              className="text-3xl font-semibold"
            >
              Your Rights
            </h2>
            <p className="leading-7 text-muted-foreground">
              You can request access, correction, or deletion of your personal data by contacting us at [email address].
            </p>
            <h2
              className="text-3xl font-semibold"
            >
              Security
            </h2>
            <p className="leading-7 text-muted-foreground">
              We take reasonable steps to protect your information, but no method of online transmission is 100% secure.
            </p>

            <h2
              className="text-3xl font-semibold"
            >
              Contact Us:
            </h2>
            <p className="leading-7 text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at:<br></br>Email: privacy@inspiro.com<br></br>Phone: +48 123 456 789
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
