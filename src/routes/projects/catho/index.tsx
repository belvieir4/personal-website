import Callout from 'components/Callout';
import CalloutList from 'components/CalloutList';
import Hero from 'components/Hero';
import TextBlock from 'components/TextBlock';
import ZoomImg from 'components/ZoomImg';
import ImgIntroCa from 'routes/projects/catho/imgs/intro-img.jpg';
import ImgScenarioCa from 'routes/projects/catho/imgs/scenario-img.jpg';
import ImgScreensCa from 'routes/projects/catho/imgs/product-screens.jpg';
import ImgIosCa from 'routes/projects/catho/imgs/ios-catho-img.jpg';
import BackLink from 'components/BackLink';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/projects/catho/')({
  component: Catho,
  beforeLoad: () => ({
    title: 'Redesigning a Mobile App Experience',
  }),
});

function Catho() {
  return (
    <>
      <Hero
        tags={['Product Design', 'Native Mobile App']}
        title="Redesigning a Mobile App Experience"
        subtitle="A case on how redesigning the B2C iOS and Android apps improved user feedback and experience."
      />

      {/* Intro Section */}
      <div className=" mb-20 flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:items-start xl:mb-32 xl:gap-14">
        <img
          src={ImgIntroCa}
          alt="Image of two phones showing product screens"
          className="w-[320px] rounded-2xl object-cover md:w-[420px] xl:w-[520px]"
        />
        <div className="flex w-full max-w-[560px] flex-col items-start">
          <TextBlock
            title="Introduction"
            paragraphs={[
              'Catho is a company that provides HR services throughout Brazil, having a B2B recruitment management web system, and a job board for B2C users available as a website and native mobile apps for iOS and Android.',
              'I was the only the designer responsible for both of the apps, iOS and Android, having the objective of delivering the B2C user a seamless experience for job hunting and application through their phones.',
            ]}
          />
          <div className="mt-8 grid w-full gap-4 md:grid-cols-2">
            <Callout
              title="Team"
              text="Product Designer (me), Product Manager, Product Owner, Tech Lead, Android dev team, and iOS dev team"
              className="md:col-span-2"
            />
            <Callout
              title="Timeframe"
              text="6 months - from July to December 2019"
            />
            <Callout
              title="Method"
              text="Dual-track Agile - Discovery and Delivery"
            />
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="mb-20 flex w-full flex-col items-center gap-8 xl:mb-32">
        <TextBlock
          title="The problem"
          paragraphs={[
            'The team had two main issues:',
            'The iOS app was built using Objective-C, so it was taking a lot of effort and money to maintain it, and the developers were having difficulties to build new features to it.',
            "And, even though the Android app was recently rebuilt, it was receiving a lot of bad reviews on Google Play, specially regarding it's confusing experience and interface.",
          ]}
        />
        <Callout
          title="Hypothesis"
          text="Create an unified and modern experience for both apps would improve the user experience, and reduce development costs."
        />
      </div>

      {/* Investigating Section */}
      <div className="mb-20 flex w-full flex-col items-start justify-center gap-10 lg:flex-row xl:mb-32 xl:gap-14">
        <TextBlock
          title="Investigating the problem"
          paragraphs={[
            "To understand the users' experience with our app, we interviewed people who reviewed it with 1 or 2 stars to understand their challenges while using our product.",
            'With these interviews, we identified several situations frustrating the user in their daily use: critical information not being correctly displayed or saved, some feedback about the job ads that were vague or difficult to understand, and accessibility problems.',
            'These insights helped list some important aspects we should focus on while redesigning the app.',
          ]}
        />
        <div className="flex w-full max-w-[560px] flex-col items-start justify-center gap-4">
          <CalloutList
            title="Main interview finds"
            content={[
              "The interface is confusing because it isn't consistent.",
              'The user needs help understanding the job status they are viewing, like if it is new or closed and if they have already applied.',
              'They must manually select the filters to keep searching for job positions every time they use the app.',
              "They can't save a job of interest to apply when they have time.",
              'When the user clicks on a job position to see the details and returns to the search results page, the system resets the scroll, and the user needs to scroll back to the point they were before.',
              "Some of the page's components are so small that users have difficulty clicking on them, especially on smaller screens.",
            ]}
          />
        </div>
      </div>

      {/* Flow / Scenario Section */}
      <div className=" mb-20 flex w-full flex-col items-start justify-center gap-10 lg:flex-row xl:mb-32 xl:gap-14">
        <img
          src={ImgScenarioCa}
          alt="Image of two phones showing product screens"
          className="w-[360px] rounded-2xl object-cover md:w-[460px] xl:w-[560px]"
        />
        <TextBlock
          title="Understanding the scenario and planning iterations"
          paragraphs={[
            'In this step, the objective was to map all areas of the app with the team to understand which user flows were critical to be prioritized and how we could organize our work.',
            'We identified that the main flows needed for the user were registration/login, job search, job application, and resume and started the work there. The idea was to design and deliver these flows to the developers to work gradually, always acting between one and two sprints before them.',
            'In this discussion, the developers pointed out that shipping new Android app versions was quicker because of Google Play, so we decided to use it to get feedback and iterate it before sending the new flows to the iOS development team.',
          ]}
        />
      </div>

      {/* Iterating Section */}
      <div className="mb-20 flex w-full flex-col items-center justify-center xl:mb-32 ">
        <TextBlock
          title="Iterating the Android App"
          paragraphs={[
            'While updating the selected flows to the new design, we collected user feedback through some channels like Google Play and Customer Experience channels. The feedback helped us quickly iterate the new design before sending it to the iOS development team.',
            'We also used the redesign to address the issues we identified in the interviews, guaranteeing that we delivered the best user experience.',
            'The new design used the Design System that Catho was developing, adapting the product to the latest guidelines we were adopting regarding accessibility and the new branding.',
            "We adopted a cleaner and more modern interface, bringing more of the brand's new colours. I've designed the new interface focusing on improving the sizes of the elements, spacing, contrasts, and feedback to ensure that it was accessible to our users.",
          ]}
        />
        <ZoomImg
          src={ImgScreensCa}
          alt="Image of some of the product screens"
        />
      </div>

      {/* iOS App Section */}
      <div className=" mb-20 flex w-full flex-col items-start justify-center gap-10 lg:flex-row xl:mb-32 xl:gap-14">
        <TextBlock
          title="Adding the flows on the iOS app"
          paragraphs={[
            'For the new iOS app, we made some adjustments to fulfill the needs of the MVP and the requirements of the Apple platform.',
            'For the approval of the app on the Apple Store, it was necessary to include a flow for users without an account registered at Catho, which led us to design a flow that would allow the user to search for job ads and consult the descriptions of job ads without being logged in and, when trying to make an application, we would redirect the user for the register and paying flow (as it is the central objective of the business).',
            'As we had already updated the Android app to the new UI, I just had to adapt the interface for the iOS standard, making the delivery of the solution much more effortless. With that, we guarantee the experience and interface for the user would be the same in both apps.',
          ]}
        />
        <img
          src={ImgIosCa}
          alt="Image of three phones showing product screens"
          className="w-[360px] rounded-2xl object-cover md:w-[460px] xl:w-[560px]"
        />
      </div>

      {/* Conclusion Section */}
      <div className=" mb-20 flex w-full flex-col items-center justify-center gap-12 lg:flex-row lg:items-start xl:mb-32 xl:gap-14">
        <div className="flex w-full max-w-[560px] flex-col items-start">
          <TextBlock
            title="Results"
            paragraphs={[
              'After implementation, we started tracking some data over the next few months and noticed the following results:',
            ]}
          />
          <div className="mt-8 flex w-full max-w-[560px] flex-col items-stretch justify-center gap-4">
            <Callout
              title="Increase of average rating"
              text="The average rating went up from 3.9 to 4.6 on Google Play"
            />
            <Callout
              title="Decrease in user complaints about the app"
              text="As we fixed a lot of bugs, the number of tickets about the app decreased for the CS team"
            />
            <Callout
              title="Increase in job application numbers and new users"
              text="As the experience for user registration and the process of finding and applying for jobs improved, the number of new users and applications increased"
            />
          </div>
        </div>
        <TextBlock
          title="Conclusion"
          paragraphs={[
            "The redesign process for Catho's apps was a challenge that took six months to complete. Still, it significantly improved user satisfaction and added value to the company, increasing key numbers like job applications and new users.",
            'The company announced their rebranding in January, and the apps were the only products that fully matched the new brand, thanks to our efforts on the redesign.',
            'This project helped me gain more experience with product design for native mobile apps and how to iterate them, especially using constant user feedback and addressing them quickly and efficiently.',
          ]}
        />
      </div>

      <BackLink />
    </>
  );
}
