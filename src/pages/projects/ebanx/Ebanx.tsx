import Hero from 'components/Hero';
import Callout from 'components/Callout';
import CalloutList from 'components/CalloutList';
import TextBlock from 'components/TextBlock';
import ImgIntroEb from 'pages/projects/ebanx/imgs/intro-img.jpg';
import ImgScenarioEb from 'pages/projects/ebanx/imgs/scenario-img.jpg';
import ImgUserflowEb from 'pages/projects/ebanx/imgs/userflow-img.jpg';
import ImgScreensEb from 'pages/projects/ebanx/imgs/product-screens.jpg';
import ZoomImg from 'components/ZoomImg';
import BackLink from 'components/BackLink';

const Ebanx = () => {
  return (
    <>
      <Hero
        tags={['Product Design', 'Responsive Website']}
        title="Automated Refund Status Flow"
        subtitle="A case on how we can improve the user's experience on a Help Center automating the access to information."
      />

      {/* Intro Section */}
      <div className=" mb-20 flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:items-start xl:mb-32 xl:gap-14">
        <img
          src={ImgIntroEb}
          alt="Image of a phone and a laptop showing the same product screen in different formats"
          className="w-[320px] rounded-2xl object-cover md:w-[420px] xl:w-[520px]"
        />
        <div className="flex w-full max-w-[560px] flex-col items-start">
          <TextBlock
            title="Introduction"
            paragraphs={[
              'EBANX Is a company that provides payment services for B2B companies that want to sell in Latin America.',
              'The main objective for the product is to help users access the information they need quickly and seamlessly while avoiding reaching for customer service agents.',
              'I was the only Product Designer responsible for all the project design process, working alongside of the Product Manager, Global Product Manager, Tech Lead and the Dev team.',
            ]}
          />
          <div className="mt-8 grid w-full gap-4 md:grid-cols-2">
            <CalloutList
              title="Main KPIs"
              content={[
                'Self-service - % of users that can find the information needed by themselves on the platform',
                'Total tickets - total number of tickets generated for the CS',
              ]}
              className="md:col-span-2"
            />
            <Callout
              title="Timeframe"
              text="3 months - from July to September 2021"
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
            'EBANX increased the number of partners using their payment system and, as the number of customer services tickets were increasing, the company was forced to invest a lot of money in call center operations.',
          ]}
        />
        <Callout
          title="Hypothesis"
          text="Automating the access to basic information about payments for the user through the help desk website could reduce operating costs"
        />
      </div>

      {/* Scenario Section */}
      <div className=" mb-20 flex w-full flex-col items-start justify-center gap-10 lg:flex-row xl:mb-32 xl:gap-14">
        <img
          src={ImgScenarioEb}
          alt="Image of two phones showing product screens"
          className="w-[360px] rounded-2xl object-cover md:w-[460px] xl:w-[560px]"
        />
        <TextBlock
          title="Understanding the scenario"
          paragraphs={[
            "We had a Help Center that contained a feature called Payment Timeline that was used as a source of basic information about users' payments through EBANX. And we had an MVP of a chatbot that was used to provide users with a link to the refund form and some information.",
          ]}
        />
      </div>

      {/* Investigation Section */}
      <div className="mb-20 flex w-full flex-col items-start justify-center gap-10 lg:flex-row xl:mb-32 xl:gap-14">
        <TextBlock
          title="Investigating the problem"
          paragraphs={[
            'We investigated qualitative data through Zendesk tickets, interviews with call center people, and also quantitative data we were capturing from the Help Center through our data science team.',
            'We started by understanding in detail the numbers we had and how users were relating to the product, finding 3 major insights:',
          ]}
        />
        <div className="flex w-full max-w-[560px] flex-col items-center justify-center gap-4">
          <Callout
            title="The Payment Timeline"
            text="We had a 53% self-service rate and only 67% of the visits in the Payment Timeline generated some search for payments"
          />
          <Callout
            title="The Chatbot MVP"
            text="The access to the chatbot MVP that serves the refund issue was much lower than the Payment Timeline"
          />
          <Callout
            title="CS Tickets"
            text="We had a high volume of refund-related tickets, mainly to request basic process information like deadline and status"
          />
        </div>
      </div>

      {/* Pain Points Section */}
      <div className=" mb-20 flex w-full flex-col items-center justify-center xl:mb-32">
        <TextBlock
          title="Identifying user pain points"
          paragraphs={[
            'Based on our research we identified all the users pain points, and decided to focus on the 3 main ones:',
          ]}
        />
        <div className="mt-8 flex w-full max-w-[560px] flex-col items-center justify-center gap-4">
          <Callout
            title="1 - Can't access the refund form"
            text="Influenced mainly by the lack of access to email, which was the only channel the user received the link, besides the chatbot MVP (which was not getting many visits)"
          />
          <Callout
            title="2 - Don't know the refund status"
            text="As the user had no channel to consult this data, they ended up contacting the customer service to do so"
          />
          <Callout
            title="3 - Don't remember the bank account"
            text="Often users could not remember which bank account they had filled out to receive the money and asked for a receipt to see the information"
          />
        </div>

        <ZoomImg
          src={ImgUserflowEb}
          alt="Image of the userflow and the questions related to it"
        />
      </div>

      {/* Iterating Section */}
      <div className="mb-20 flex w-full flex-col items-center justify-center xl:mb-32 ">
        <TextBlock
          title="Iterating the product"
          paragraphs={[
            'After analyzing the data, we identified the opportunity to insert, in the Payment Timeline itself, the refund process information that the user needed.',
            'After that, we investigated the risks of this change with the developers to understand what would be required to bring this information from the chatbot MVP into the Payment Timeline. With this investigation, we saw that only one API would be reused in the new flow.',
            'Based on this, we defined that in the first iteration, we should prioritize the main pain points of the users previously identified (form access, status, and payment receipt).',
            'Then, for the next iterations, we focused on inserting complementary information, such as deadlines and tips about the process.',
            'Since the iterations would be performed on a consolidated product, we already had the entire basis of the interface well defined and, with this, we were able to focus our efforts on defining which information to insert into the structure and, thus, adapt their distribution on the screens.',
            'The hand-off to the developers was also facilitated because we reused many existing components, so the development time was reduced.',
          ]}
        />
        <ZoomImg
          src={ImgScreensEb}
          alt="Image of some of the product screens"
        />
      </div>

      {/* Conclusion Section */}
      <div className=" mb-20 flex w-full flex-col items-center justify-center gap-12 lg:flex-row lg:items-start xl:mb-32 xl:gap-14">
        <div className="flex w-full max-w-[560px] flex-col items-start">
          <TextBlock
            title="Results"
            paragraphs={[
              'After implementation, we started tracking KPIs over the next few months and noticed the following results:',
            ]}
          />
          <div className="mt-8 flex w-full max-w-[560px] flex-col items-stretch justify-center gap-4">
            <Callout
              title="Increase in self-service"
              text="From 55.9% in September/2021 to 68% in March/2022"
            />
            <Callout
              title="Decrease in tickets on refund"
              text="49 thousand in September/2021 to 40 thousand in March/2022"
            />
            <Callout
              title="Increase on Payment Timeline inquiries"
              text="Increasing from 71% of people accessing and viewing their payment history to 81.6% in the same period commented above"
            />
          </div>
        </div>
        <TextBlock
          title="Conclusion"
          paragraphs={[
            'More than just a payment query, this iteration of the Payment Timeline brought value to both the company and the user.',
            'With more automated ways for the user to answer their frequently asked questions, the company is able to reduce call center costs and has a product with a strong advantage over the competition.',
            'And the user is able to have an entire follow-up of his purchases on EBANX, from when he makes to if he has a refund to be made, all in a practical and fast way.',
          ]}
        />
      </div>

      <BackLink />
    </>
  );
};

export default Ebanx;
