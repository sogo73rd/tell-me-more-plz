import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import profileAcademic from "@/assets/profile-academic.jpg";
import profileSecurity from "@/assets/profile-security.jpg";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Professor Muhammad Gidado Mahmoud Fari - Academic & Security Expert</title>
        <meta
          name="description"
          content="Professor Muhammad Gidado Mahmoud Fari - Distinguished Academic Professor, General with Nigeria Security and Civil Defence Corps, Expert in Education and Islamic Studies."
        />
        <meta
          name="keywords"
          content="Professor, Gidado, Fari, Muhammad, NSCDC, Nigeria security and civil defence corps, Islamic Studies, Education, Security Expert"
        />
        <meta name="author" content="Professor Muhammad Gidado Mahmoud Fari" />
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />

        <main className="pt-20 pb-12">
          <div className="section-container">
            {/* Profile Section */}
            <Section id="profile">
              <div className="text-center">
                <img
                  src={profileAcademic}
                  alt="Professor Muhammad Gidado Mahmoud Fari in traditional attire"
                  className="w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-full border-4 border-card shadow-lg object-cover mb-6"
                  loading="lazy"
                  decoding="async"
                />
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
                  Professor Muhammad Gidado Mahmud Fari
                </h1>
                <p className="text-lg sm:text-xl text-secondary font-semibold mb-6 uppercase tracking-wide">
                  fsi, fsfs, fcp, fai, fap
                </p>
                <p className="text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
                  Muhammad Gidado Mahmud Fari is currently a General with Nigeria Security and Civil Defence Corps
                  and a visiting Professor to several Universities both Nationally and Internationally.
                  Born in Girei Local Government of Adamawa State, Nigeria, is an egghead Professor of Education and Islamic studies.
                  The first ever distinguished academic professor worldwide among Security Generals currently.
                </p>
              </div>
            </Section>

            {/* Family Background */}
            <Section id="family-background" title="Family Background">
              <p className="text-base sm:text-lg">
                General Fari is happily married with Children & Grandchildren.
                Most of his Children are graduates of Law, Environmental Toxicology, Human Physiology, Civil Engineering etc.
                Some of which are undergoing Masters & PhD Degree Programs.
              </p>
            </Section>

            {/* Education */}
            <Section id="education" title="Educational Background">
              <p className="mb-4 text-base sm:text-lg">Professor Fari has several academic qualifications including:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>B.Sc., M.Sc. and Ph.D Degrees in Public Administration from Ambrose Alli University (A.A.U)</li>
                <li>M.Ed (Islamic Studies) from Ahmadu Bello University (A.B.U)</li>
                <li>Ph.D Religious Education from University of Ilorin</li>
              </ul>
            </Section>

            {/* Books */}
            <Section id="books" title="Academic Books">
              <p className="mb-6 text-base sm:text-lg">
                Fari has published quite a lot of Academic books mostly in the fields of Islamic Studies,
                Islamic Law, Education and Nigeria Legal System among others.
                The books are of International Standard and are widely used as essential resources
                in many schools and Courts of Law, notable among them include:
              </p>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-bold text-lg mb-1">The Legal Rights of Accused Person under Nigerian Law and Islamic Legislation.</h4>
                  <p className="text-muted-foreground">Published by Unilorin Press, University of Ilorin, Nigeria. ISBN: 978-978-49285-1-9. August, 2009.</p>
                </li>
                <li>
                  <h4 className="font-bold text-lg mb-1">The Concept of Justice under Islamic Criminal Law.</h4>
                  <p className="text-muted-foreground">Published by Unilorin Press, University of Ilorin, Nigeria. ISBN:978-075-584-5. The foreword was written by Prof. Kharisu Sufyan Chukkol, Professor/Dean of Law, Ahmadu Bello University, Zaria-Nigeria. An International Professor & Authority of Criminal Law.</p>
                </li>
                <li>
                  <h4 className="font-bold text-lg mb-1">A Legal Insight to Islamic Law of Wasiyyah and its Application in Northen Nigeria</h4>
                  <p className="text-muted-foreground">Published by Unilorin Press, University of Ilorin, Nigeria. ISBN:978-075-576-4.</p>
                </li>
                <li>
                  <h4 className="font-bold text-lg mb-1">The Right of Non-Muslims under Sharia State: A Case Study of Sharia Implementation in Northern Nigeria.</h4>
                  <p className="text-muted-foreground">Published by Unilorin Press, University of Ilorin, Nigeria. August, 2009, ISBN:978-978-49285-2-6.</p>
                </li>
                <li>
                  <h4 className="font-bold text-lg mb-1">Beautiful Lessons from the Wives of the Prophet (S.A.W): Legal & Moral Analysis.</h4>
                  <p className="text-muted-foreground">The foreword was written by Dr. Yusuf Dalhat, Head of Islamic Studies, Ahmadu Bello University, Zaria-Nigeria. 1994.</p>
                </li>
                <li>
                  <h4 className="font-bold text-lg mb-1">Marriage Termination under Sharia, Forms, Types, Nature, Problems, Causes, Challenges and Solution: A Case Study of Northernn Nigeria.</h4>
                  <p className="text-muted-foreground">Published 2011 & Forward by 23 Jurists across the world-over.</p>
                </li>
                <li>
                  <h4 className="font-bold text-lg mb-1">Islam: Religion of Peace, Unity, Stability and Brotherliness.</h4>
                  <p className="text-muted-foreground">(Unpublished).</p>
                </li>
                <li>
                  <h4 className="font-bold text-lg mb-1">Waiting Period, Breast-feeding and Child's Custody under Shari`a: A Survey of Southern Nigeria.</h4>
                  <p className="text-muted-foreground">(Unpublished).</p>
                </li>
                <li>
                  <h4 className="font-bold text-lg mb-1">Practical Application to Islamic Law of Succession.</h4>
                  <p className="text-muted-foreground">(Unpublished).</p>
                </li>
                <li>
                  <h4 className="font-bold text-lg mb-1">Marriage: An Institution of Allah`s Blessings</h4>
                  <p className="text-muted-foreground">(Unpublished).</p>
                </li>
              </ul>
            </Section>

            {/* Thesis/Projects */}
            <Section id="thesis" title="Thesis/Projects">
              <ul className="space-y-4">
                <li>
                  <h4 className="font-bold text-lg">Educational Provisions, Child Development Services and Facilities of Internally Displaced Persons in Adamawa State, 2017.</h4>
                </li>
                <li>
                  <h4 className="font-bold text-lg">Efficiency of Internal Council as a Tool for Corruption and Fraud Prevention in Nigeria: a case Study of some Local Government Areas, 2004</h4>
                </li>
                <li>
                  <h4 className="font-bold text-lg">Effective Strategic of Administrative Management and Managerial Qualities: a case study of some Media Houses, 2013.</h4>
                </li>
                <li>
                  <h4 className="font-bold text-lg">Teachers and Students Perceptions of the Teaching and Learning of Islamic Studies in Secondary Schools in Adamawa State-Nigeria, 1998.</h4>
                </li>
                <li>
                  <h4 className="font-bold text-lg">Family and Gender Differences in Upper Basic School Student's Performance in Islamic Studies in Adamawa State, Nigeria, 2016.</h4>
                </li>
                <li>
                  <h4 className="font-bold text-lg">Collective Bargaining as a Valuable Means for Conflict Management in Nigerian Institutions, 2020.</h4>
                </li>
              </ul>
            </Section>

            {/* Journals */}
            <Section id="journals" title="National & International Academic Journals">
              <p className="mb-6 text-base sm:text-lg">
                Professor Fari has more than one hundred Articles in reputable National and International Academic Journals of
                Education and Islamic Studies on different areas ranging from Curriculum and Instructions,
                Curriculum and Evaluations, Educational Psychology, Islamic Law, Islamic History, Islamic Constitution,
                Islamic Transactions, Islamic Marriage, Islamic Legislation and Islamic Faith among others.
                Some Journals were carrying two of his Articles & he is a core contributor in some papers.
                Below are some of the published Academic papers:
              </p>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-bold text-lg mb-1">Values Priorities and In-School Adolescent Lifestyles in Ilorin Metropolis, Nigeria</h4>
                  <p className="text-muted-foreground">Published in Nigerian Journal of Educational Foundations, University of Ilorin. Vol. 18, No.1.P.122. ISSN: 1116-0381.</p>
                </li>
                <li>
                  <h4 className="font-bold text-lg mb-1">Lecturers perception of Causes of Unemployment among Educated Youths in Nigeria: The Social Implications.</h4>
                  <p className="text-muted-foreground">Published in Journal of Research and Development in Education (JORDE). University of Uyo. Vol. 7, No. 1, page 48. ISSN: 1597-3255.</p>
                </li>
                <li>
                  <h4 className="font-bold text-lg mb-1">Parental Entrepreneurial Experience and Peer-Group Influence as Predictors of Entrepreneurial Intentions of Undergraduates in University of Ilorin</h4>
                  <p className="text-muted-foreground">University of Ilorin-Nigeria. Vol. 10, No.2, Page 249. ISSN: ONLINE-2006-6937.</p>
                </li>
                <li>
                  <h4 className="font-bold text-lg mb-1">Family Types and Upper Basic School Students` Performance in Islamic Studies in Adamawa State, Nigeria.</h4>
                  <p className="text-muted-foreground">Published in Unilorin Journal of Lifelong Education. P.1. Vol. 4. 2020</p>
                </li>
              </ul>
            </Section>

            {/* Security Career */}
            <Section id="security" title="Security Career">
              <div className="text-center mb-6">
                <img
                  src={profileSecurity}
                  alt="Professor Muhammad Gidado Mahmoud Fari in NSCDC uniform"
                  className="w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-full border-4 border-card shadow-lg object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-base sm:text-lg text-center">
                His career as a senior officer includes heading Departments, Acting Provost of Academy, State Service Chief,
                and Zonal Commander. His legacy speaks of Justice, professionalism, integrity & conduct.
              </p>
            </Section>

            {/* Trainings */}
            <Section id="trainings" title="Trainings">
              <p className="mb-6 text-base sm:text-lg">
                General Fari attended several training and courses both national and international which include among others:
              </p>
              <ul className="space-y-3">
                <li><h4 className="font-bold">Prison Training School (Officers Basic Course), Enugu, 2006.</h4></li>
                <li><h4 className="font-bold">Puisano Institute, Pretoria, South-Africa (Strategic Management Programme), 2010.</h4></li>
                <li><h4 className="font-bold">Prison Staff College, Barnawa-Kaduna (Small Arms Training), 2011.</h4></li>
                <li><h4 className="font-bold">Nigerian Army, 35 Battalion, Katsina, Batch 1, (Intensive Arm Training), 2013.</h4></li>
                <li><h4 className="font-bold">Nigerian Army, 35 Battalion, Katsina, Batch 2, (Intensive Arm Training), 2014.</h4></li>
                <li><h4 className="font-bold">National Intelligence Agency (NIA), Abuja, (Weapon Handling/Shooting), 2014.</h4></li>
                <li><h4 className="font-bold">Nigeria Security and Civil Defence Corps, Jigawa State Command (Intensive Training on Riffle Exercise, Drill & Fitness), 2015.</h4></li>
                <li><h4 className="font-bold">National Institute of Security Studies (NISS), Bwari, Abuja, Nigeria (Executive Intelligence Management Course), 2017.</h4></li>
                <li><h4 className="font-bold">Peace Operation Institute in Collaboration with the United Nations (UN), (Certificate: Implementation of UN Security Council Resolutions on the Women, Peace and Security Agenda in Africa).</h4></li>
                <li><h4 className="font-bold">Peace Operation Institute in Collaboration with Kofi Annan International Peacekeeping Training Centre (Certificate: Principles and Guidelines for UN Peacekeeping Operations).</h4></li>
                <li><h4 className="font-bold">Peace Operation Institute in Collaboration with Kofi Annan International Peacekeeping Training Centre (Certificate: Ethics in Peacekeeping).</h4></li>
              </ul>
            </Section>

            {/* Served States */}
            <Section id="states" title="Served States">
              <ul className="space-y-2">
                <li><h4 className="font-bold">Oyo State Command, Ibadan, 2006-2007.</h4></li>
                <li><h4 className="font-bold">Kwara State Command, Ibadan, 2007-2010.</h4></li>
                <li><h4 className="font-bold">Sauka Academy, Abuja, 2010-2012.</h4></li>
                <li><h4 className="font-bold">Jigawa State Command, 2012-2015.</h4></li>
                <li><h4 className="font-bold">Yobe State Command, 2015-2016.</h4></li>
                <li><h4 className="font-bold">Nasarawa State Command, 2017-2021.</h4></li>
                <li><h4 className="font-bold">Benue State Zonal Command (Zone-H), 2021.</h4></li>
                <li><h4 className="font-bold">Bauchi State Zonal Command (Zone-C), 2021.</h4></li>
                <li><h4 className="font-bold">Sokoto State Zonal Command (Zone-M), 2022.</h4></li>
                <li><h4 className="font-bold">Anambra State Zonal Command (Zone-K), 2021.</h4></li>
              </ul>
            </Section>

            {/* Posts Held */}
            <Section id="posts" title="Posts Held">
              <ul className="space-y-2">
                <li><h4 className="font-bold">Head of Disaster Management, Oyo State Command.</h4></li>
                <li><h4 className="font-bold">Head of Technical Services, Kwara State Command.</h4></li>
                <li><h4 className="font-bold">Head of General Administration, Kwara State Command.</h4></li>
                <li><h4 className="font-bold">Head of Operations, Kwara State Command.</h4></li>
                <li><h4 className="font-bold">Chief Iman, National Headquarters, Sauka Academy, Abuja.</h4></li>
                <li><h4 className="font-bold">Ag. Provost, Sauka Academy, Abuja.</h4></li>
                <li><h4 className="font-bold">State Commandant, Jigawa State Command.</h4></li>
                <li><h4 className="font-bold">State Commandant, Yobe State Command.</h4></li>
                <li><h4 className="font-bold">State Commandant, Nasarawa State Command.</h4></li>
                <li><h4 className="font-bold">Zonal Commander, Sokoto Zonal Command.</h4></li>
                <li><h3 className="font-bold text-xl text-secondary">Assistant Commandant General (ACG), posted to National Headquarters, Abuja.</h3></li>
              </ul>
            </Section>

            {/* Awards */}
            <Section id="certificates" title="Certificates of Award">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="font-bold text-lg mb-1">Certificate of Excellence</h3>
                  <p className="text-muted-foreground">Puisano International Institute, Pretoria, Republic of South Africa, 2010.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Fellow of Security Institute</h3>
                  <p className="text-muted-foreground">National Institute of Security Studies (NISS), Bwari, Abuja, Nigeria, 2017.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Most Outstanding Commandant in Northern Nigeria</h3>
                  <p className="text-muted-foreground">Global Alliance of Northern Nigeria Youths, Sir, Ahmadu Bello Prestigious Merit Award, 2019.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Performance Award as Best Security Service Chief of the Year 2018</h3>
                  <p className="text-muted-foreground">Security and Forensic Studies, Nigeria, Nasarawa State Chapter.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Icon of Humanitarian Service</h3>
                  <p className="text-muted-foreground">Association of Northern Nigerian Students (ANNS).</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Best Shooter of the Year 2019</h3>
                  <p className="text-muted-foreground">Nigeria Security and Civil Defence Corps, Nasarawa State Command.</p>
                </div>
              </div>
            </Section>

            {/* Fellowships */}
            <Section id="fellowships" title="Professional Fellowships & Academic Memberships">
              <ul className="space-y-2">
                <li><h4 className="font-bold">National Institute of Security Studies (NISS), Bwari, Abuja, Nigeria, (Fellow, 2017).</h4></li>
                <li><h4 className="font-bold">Institute of Criminology and Penology (Associate Member, 2014).</h4></li>
                <li><h4 className="font-bold">Nigeria Association of Teachers of Arabic and Islamic Studies (NATAIS), (Member, 2018).</h4></li>
                <li><h4 className="font-bold">Security and Forensic Studies, Nigeria, (Fellow).</h4></li>
              </ul>
            </Section>

            {/* Conferences */}
            <Section id="conferences" title="Conferences/Symposia/Seminars & Workshops">
              <ul className="space-y-4">
                <li>
                  <h4 className="font-bold text-lg">Continuous Assessment System Workshop.</h4>
                  <p className="text-muted-foreground">Ahmadu Bello University, Zaria: Demonstration Secondary School, 1999.</p>
                </li>
                <li>
                  <h4 className="font-bold text-lg">Strategic Management Programme.</h4>
                  <p className="text-muted-foreground">Puisano International Institute, Pretoria, Republic of South Africa, 2010</p>
                </li>
                <li>
                  <h4 className="font-bold text-lg">Executive Intelligence Management Course</h4>
                  <p className="text-muted-foreground">National Institute of Security Studies (NISS), Bwari, Abuja, Nigeria, 2017</p>
                </li>
                <li>
                  <h4 className="font-bold text-lg">Training Workshop on Strengthening the Capacity of State Commandants</h4>
                  <p className="text-muted-foreground">Konrad Adenauer Stiftung, Abuja, Nigeria, 2021.</p>
                </li>
              </ul>
            </Section>

            {/* Community Services */}
            <Section id="community" title="Community Services">
              <ul className="space-y-2">
                <li><h4 className="font-bold">National and International Ramadan Tafsir, since 1980 to date.</h4></li>
                <li><h4 className="font-bold">Garkuwar Mahaddata Qur`anin-Nasarawa State.</h4></li>
                <li><h4 className="font-bold">Adon-Garin Karshi, Nasarawa State.</h4></li>
                <li><h4 className="font-bold">Sarkin-Malaman Daddare, Nasarawa State.</h4></li>
                <li><h4 className="font-bold">President (Ameer), Muslim Students Society (MSS), Ahmadu Bello University (A.B.U), Zaria.</h4></li>
                <li><h4 className="font-bold">Patron: Cooperative Society, Nigeria Security & Civil Defence Corps (NSCDC), Jigawa State, Command.</h4></li>
                <li><h4 className="font-bold">Grand Patron: Actors Guild of Nigeria.</h4></li>
                <li><h4 className="font-bold">Pioneer Jumu'ah Chief Imam Wuro-hausa, Girei, Adamawa State.</h4></li>
                <li><h4 className="font-bold">Pioneer Eid Chief Imam Wuro-hausa, Girei, Adamawa State.</h4></li>
              </ul>
            </Section>
          </div>
        </main>

        <footer className="bg-primary text-primary-foreground py-6">
          <div className="section-container text-center">
            <p>&copy; 2024 Professor Muhammad Gidado Mahmoud Fari. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
