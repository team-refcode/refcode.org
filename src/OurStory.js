import Teaching_4 from './media/Teaching_4.jpg';
import PXL_20210527_210141107 from './media/PXL_20210527_210141107.jpg';
import brenton_speaking from './media/brenton-speaking.png';
import './pagestyles.css'

function OurStory(){
  return (
    <div>
      <section class="student threeColumnGrid">
        <aside class="aside-navigation aside-navigation-smaller">
          <ul>
            <li><a href='/pages/team.html'>Our Team</a></li>
            <li><a href='/pages/founder.html'>Meet the Founder</a></li>
            <li><a href='/our-story' class="current">Our History</a></li>
          </ul>
        </aside>
        <div class="student-photo" >
        </div>
        <div class="text-column">
          <h1>Refcode History</h1>
          <p>
            Refcode started in 2017 when <a href="/pages/founder.html">Brenton Strine</a> reached out to the director at the Friends of Refugees Career Hub to propose teaching an introductory coding class.
            After a lot of planning and thinking, a pilot program was put together to teach the first cohort in Summer 2017.
          </p>
          <figure>
            <img src={Teaching_4} alt={'Brenton is teaching'} className="storyImage"/>
            <figcaption>
              Brenton teaching in front of a monitor propped up on chairs.
            </figcaption>
          </figure>
          <p>
            From the beginning, the purpose of the class was more than just “teaching code.”
            The students did learn HTML and CSS to code a website, and they learned some important software engineering tools like GitHub and important internet concepts like how domain registration and web servers work.
            But just as much time was spent getting students to think about what a career in software engineering would really look like.
            The class was run as if it were a team of software engineers following agile methodology.
            Each class week was run as a “sprint” and instead of homework, students were assigned issues which they tracked on a kanban board (Trello) and provided standup updates for.
            Students also began building their developer stories, their LinkedIn profiles, and their resumes.
            This was no ordinary coding class, this was an introduction to a new career opportunity and a chance for students to consider if they really wanted to pursue that opportunity.
          </p>
          <p>
            In order to support students in that goal, the coding class had to grow and expand rapidly.
            Instead of just one teacher and a few volunteer TAs helping the class,
            the number of TAs was expanded dramatically to the point that there was more than one volunteer in class for each student.
            A mentorship program was created to match graduates of the class with seasoned software professionals over a six-month period to help provide guidance and feedback as they took their next steps.
            We added study groups to help students complete homework each sprint.
          </p>
          <p>We added a walk-in lab open to anyone to walk in and get help on their Refcode homework or anything else!</p>
          <p>
            As graduates and participants grew in skill level and experience, a new challenge began to appear.
            Refcode participants could gain skills and build their knowledge, but even with education and good support,
            it is difficult to find the first job as a software engineer without some kind of “leg up” to get in.
            Many people are able to rely on some kind of personal advantage such as a connection or parent willing to help them land their first job at a company,
            or a college or university that creates connections to great internship opportunities, or even the luxury of being supported by someone else while taking the time and risk to build up a freelance business.
            Unfortunately, many refugees and immigrants aren’t able to lean on those advantages, and they face the ultimate employment paradox: you need to have experience in order to get experience.
          </p>
          <p>
            We always knew that this would be the most difficult part of the journey!
            We launched several initiatives to try to address the difficulty of gaining real-world experience.
            TeamCode was created to give participants a chance to work on a real-world project in a team environment.
            Refcode also began to pursue partnerships with businesses willing to take on a small cohort of paid apprentices for a short program.
            (By the way, if you’re interested in that, please reach out <a href="/pages/partner.html#reach-out">here</a>!)
          </p>
          <figure>
            <img src={brenton_speaking} alt={"First meetup"} className="storyImage"/>
            <figcaption>
              A graduation ceremony
            </figcaption>
          </figure>
          <p>
            Up to this point, Refcode was still technically just a simple class put on by the Career Hub.
            However, the scope and complexity of operations had grown significantly and was only going to continue to grow.
            It was also becoming apparent that Refcode had a vision of its own and that vision was heading in a slightly different direction from the Career Hub,
            which has always been focused on matching refugees with careers and jobs that they are qualified for or can be qualified for with a fairly well-defined training program.
            Refcode’s goal for refugees, however, is less well defined and much longer term. The mission of Refcode was being solidified into one of introducing refugees and immigrants to the software engineering career,
            helping them discern their interest, aptitude, and ability, supporting them in their journey if they do choose to pursue it, and creating new pathways for participants to land their first job.
            After a lot of soul-searching, many conversations, and with the blessing of Friends of Refugees, Refcode decided to come out from under the umbrella of Friends of Refugees.
          </p>
          <p>
            At this point, Refcode had no official existence of any kind. It was not a 401c3 nonprofit, had no employees or staff,
            and had no formal affiliations with anyone. Refcode was, as it always has been and always will be, a community of refugees,
            immigrants, software engineers, learners and teachers. But we needed operational support and help with logistics.
          </p>
          <p>
            Enter Tekton Career Training. Tekton, formerly called The Lantern Project, actually served as an initial inspiration to start Refcode in the first place.
            Brenton was friends with Luke Keller who started The Lantern Project and when he heard about it knew that that was exactly the sort of program that he had been thinking about starting,
            and it was Luke who first introduced Brenton to the director at the Career Hub. It’s no surprise then that Tekton and Refcode found a lot of alignment in their missions and visions.
            The big difference was that Tekton was limited to construction related trades and Refcode limited to tech trades. But Tekton had plans to expand into other trades and the vision matched so well that Tekton and Refcode joined for a pilot partnership in 2020.
            Delayed a bit by the pandemic, this partnership will give these two organizations a chance to feel out what working together can look like and whether the collaboration makes sense in the long term.
          </p>
          <figure>
            <img src={PXL_20210527_210141107} alt={"First meetup"} className="storyImage"/>
            <figcaption>
              Refcode’s first meetup in their new location at the Tekton space.
            </figcaption>
          </figure>
          <p>
            Today Refcode is continuing the same programs that were started under the Career Hub and pioneering new and innovative partnerships with businesses to create the best opportunities for refugees and immigrants to begin careers in software engineering.
          </p>
        </div>
      </section>
    </div>
  )
}

export default OurStory;
