// React 
import React, { Component } from 'react';

// React Components
import Card from "./NewTeam/TeamCard";

// CSS
import "./NewTeam/NewTeam.css";

// Images
// 3-20
import irispalmer from "./SpeakersWorld2/First Weekend/Saturday 3-20/Iris Palmer Picture.jpg";
import vincentconitzer from "./SpeakersWorld2/First Weekend/Saturday 3-20/vincentconitzer.jpg";
import alberto from "./SpeakersWorld2/First Weekend/Saturday 3-20/alberto.jpg";
import angelrad from "./SpeakersWorld2/First Weekend/Saturday 3-20/ARadcliffe-stemworld.png";
import carysieg from "./SpeakersWorld2/First Weekend/Saturday 3-20/Cary photo.jpeg";
import bernardamadei from "./SpeakersWorld2/First Weekend/Saturday 3-20/BernardAmadei.JPG"

// 3-21
import alysonkel from "./SpeakersWorld2/First Weekend/Sunday 3-21/web-1.jpg";
import michaelodell from "./SpeakersWorld2/First Weekend/Sunday 3-21/odell.png";
import jillcode from "./SpeakersWorld2/First Weekend/Sunday 3-21/JillianneCode.png";
import fredgould from "./SpeakersWorld2/First Weekend/Sunday 3-21/fred-gould.jpg";
import jamescoll from "./SpeakersWorld2/First Weekend/Sunday 3-21/JamesCollins.jpg";
import eleanorfish from "./SpeakersWorld2/First Weekend/Sunday 3-21/2020 headshot as jpeg (1).jp2";

// 3-27
import rogeraze from "./SpeakersWorld2/Second Weekend/Saturday 3-27/Azevedo pic UCF.jpg";
import michaelk from "./SpeakersWorld2/Second Weekend/Saturday 3-27/michaelkay.jpg";
import tigersheng from "./SpeakersWorld2/Second Weekend/Saturday 3-27/DSC_0125.jpg";

// 3-28
import taradeans from "./SpeakersWorld2/Second Weekend/Sunday 3-28/TLD pic for seminars.jpg";
import michelledigman from "./SpeakersWorld2/Second Weekend/Sunday 3-28/michelledigman.png";
import changliu from "./SpeakersWorld2/Second Weekend/Sunday 3-28/changliu.jpg";

export default class STEMWorld2Speakers extends Component {
    render() {
        return (
            <div class="new-team-con">
                <div class="new-team">
                    <h1>Meet Our Speakers</h1>
                    <div class="con">
                        {/* First weekend => 3-20 */}
                        <Card
                            name="Iris Palmer"
                            imgURL={irispalmer}
                            des="Iris Palmer is a senior advisor for higher education and workforce with the Education Policy program at New America. She is a member of the higher education team and also works closely with the Center on Education and Labor. She provides research and analysis on the ethical use of predictive analytics in higher education, apprenticeship, community colleges, and adults enrolled in higher education. Palmer previously worked at the National Governors Association on postsecondary issues. There she helped states strengthen the connection between higher education and the workforce, support competency-based systems, use data from effectiveness and efficiency metrics, and improve licensure for veterans. Prior to joining NGA, she worked at HCM Strategists on the Lumina Foundation’s initiative to develop innovative higher education models, including new technologies and competency-based approaches. Before joining HCM Strategists, Palmer worked at the U.S. Department of Education in all of the offices related to higher education: the Office of Vocational and Adult Education, the Office of Postsecondary Education, the Policy Office, and the Office of the Undersecretary. Palmer received her undergraduate degree in political science from Goucher College and her master’s of public policy from George Mason University."
                            position="Senior Advisor"
                        />
                        <Card
                            name="Vincent Conitzer"
                            imgURL={vincentconitzer}
                            des="Vincent Conitzer is the Kimberly J. Jenkins Distinguished University Professor of New Technologies and Professor of Computer Science, Professor of Economics, and Professor of Philosophy at Duke University. He received Ph.D. (2006) and M.S. (2003) degrees in Computer Science from Carnegie Mellon University, and an A.B. (2001) degree in Applied Mathematics from Harvard University. Conitzer works on artificial intelligence (AI). Much of his work has focused on AI and game theory, for example designing algorithms for the optimal strategic placement of defensive resources. More recently, he has started to work on AI and ethics: how should we determine the objectives that AI systems pursue, when these objectives have complex effects on various stakeholders?
                                 Conitzer has received the Social Choice and Welfare Prize, a Presidential Early Career Award for Scientists and Engineers (PECASE), the IJCAI Computers and Thought Award, an NSF CAREER award, the inaugural Victor Lesser dissertation award, an honorable mention for the ACM dissertation award, and several awards for papers and service at the AAAI and AAMAS conferences. He has also been named a Guggenheim Fellow, a Sloan Fellow, a Kavli Fellow, a Bass Fellow, an ACM Fellow, a AAAI Fellow, and one of AI's Ten to Watch. He has served as program and/or general chair of the AAAI, AAMAS, AIES, COMSOC, and EC conferences. Conitzer and Preston McAfee were the founding Editors-in-Chief of the ACM Transactions on Economics and Computation (TEAC)."
                            position="University Professor"
                        />
                        <Card
                            name="Alberto Quattrini Li"
                            imgURL={alberto}
                            des="Alberto Quattrini Li is an assistant professor in the Computer Science Department at Dartmouth College and co-directs the Dartmouth Reality and Robotics Lab. He studies how to make robotic systems intelligent and autonomous to enable the interpretation and the modification of the physical world for applications of societal interest. Two projects recently funded by the National Science Foundation include monitoring harmful cyanobacterial blooms in lakes and mapping underwater archaeological structures. He has deployed multi-robot systems, consisting of underwater robots, surface vehicles, and aerial drones, in many lakes and oceans as part of field experiments for testing the developed systems, as well as supporting other scientists in understanding our environment with new robotics technology."
                            position="University Professor"
                        />
                        <Card
                            name="Angel Radcliffe"
                            imgURL={angelrad}
                            des="Angel is a Speaker, Author, Business Consultant & award-winning Financial Educator with 10+ years’ experience in Corporate Finance & Technology. Driven by a passion for Financial Literacy, Ms. Radcliffe works within communities to teach the strategies of Budgeting & Financial Management for Consumers and Entrepreneurs.
                                Ms. Radcliffe has been featured in Fox News, Buzzfeed, Black Enterprise, Self Magazine, Huffington Post, Experian, American Express, and Hello Beautiful. Angel is also the Founder of M~Suite, an online community focusing on Milestones, Motivation & Money alongside the Ballin' On A Budget-themed content."
                            position="Author and Business Consultant"
                        />
                        <Card
                            name="Cary Siegel"
                            imgURL={carysieg}
                            des="Cary Siegel retired from corporate America at the young age of 45. He then went on to write the bestselling book “Why Didn’t They Teach Me This In School? 99 personal money management principles to live by”. The books were originally written for his 5 teenage children but he quickly found it was relevant to all adults and expanded presentations to audiences of all ages."
                            position="Retired Professional"
                        />
                        <Card
                            name="Dr. Bernard Amadei"
                            imgURL={bernardamadei}
                            des="Dr. Amadei is a Distinguished Professor and Professor of Civil Engineering at the University of Colorado at Boulder. He received his Ph.D. in 1982 from the University of California at Berkeley. Dr. Amadei is the Founding Director of the Mortenson Center in Engineering for Developing Communities. He is also the Founding President of Engineers Without Borders - USA and the co-founder of the Engineers Without Borders-International network. Among other distinctions, Dr. Amadei is an elected member of the US National Academy of Engineering and the National Academy of Construction. He is also an elected Senior Ashoka Fellow. Dr. Amadei holds seven honorary doctoral degrees (UMass Lowell; Carroll College; Clarkson; Drexel; Worcester Polytechnic Institute; the Technion in Israel; and SUNY-ESF). In 2013 and 2014, Dr. Amadei served as a Science Envoy to Pakistan and Nepal for the US Department of State."
                            position="University Professor"
                        />

                        {/* First weekend => 3-21 */}
                        <Card
                            name="Dr. Alyson Kelvin"
                            imgURL={alysonkel}
                            des="Dr. Alyson Ann Kelvin is an Assistant Professor at Dalhousie University. She is currently seconded as a Scientist at VIDO-InterVac to aid in the evaluation and development of COVID-19 vaccines for Canada. Her cutting-edge research has led to important discoveries in the fields of viral immunology and vaccinology including the timely development of COVID-19 preclinical models and vaccines in Canada.
                                Her work is focused on emerging viruses and the development of vaccines for these viral threats. She studies how the immune system is regulated to develop immune memory during viral infection and viral vaccine immunization. Dr. Kelvin’s research has followed the outbreaks of several emerging viruses including SARS-CoV, pandemic 2009 H1N1 influenza virus, seasonal avian influenza viruses (H5N1 and H7N9), chikungunya virus, Zika virus, and now the novel coronavirus SARS-CoV-2.
                                Dr. Kelvin is an active member of the World Health Organization (WHO) Ad Hoc Advisory Committee on SARS-CoV-2 vaccine design and the editorial committee for the Journal of Infection in Developing Countries. She holds a PhD from the Centre for Infection and Immunity at Queen’s University Belfast (2007) and a H.BSc with a Concentrate in Cell Biology from Western University (2003)."
                            position="Assistant Professor"
                        />
                        <Card
                            name="Dr. Michael Odell"
                            imgURL={michaelodell}
                            des="Michael R.L. Odell, Ph.D. is a Professor of STEM Education and holds the endowed Roosth Chair in Education. Dr. Odell holds a joint appointment in the College of Education and Psychology and the College of Engineering. He has been instrumental in implementing innovative programs that have resulted in increased enrollments, extramural research grants, and gifts from alumni and industry. Programs initiated by Dr. Odell include the UTeach Replication, which has doubled the number of STEM teachers produced by the university. He co-founded the UT Tyler University Academy charter schools, which also serve as Laboratory Schools for the School of Education located at the UT Tyler main campus (Tyler, TX) and extension campuses in Longview and Palestine. He also established the Ingenuity Center, one of seven designated STEM Centers in Texas. Dr. Odell developed the agreement for the UT Tyler Partnership to manage the Discovery Science Place, a Family STEM Museum and associated Mobile STEM Outreach. He is currently the Co-Director for the UT Tyler UTEach program and the Doctoral Program in School Improvement. In addition to his faculty appointment, Dr. Odell has held several administrative positions at UT Tyler including the Director of the School of Education and the Vice President for Sponsored Research. Dr. Odell has published numerous articles, book chapters, proceedings, and technical reports. He has won over $60 million in grants, contracts, royalties, and development."
                            position="University Professor"
                        />
                        <Card
                            name="Jillianne Code"
                            imgURL={jillcode}
                            des="Professor Code is a researcher, educator, and learning scientist specializing in STEM education and learner agency. Her research is focused on learner agency and its role in shaping the role of STEM through design thinking, learning technology, and translational research at the University of British Columbia. Jillianne is an Assistant Professor in the Faculty of Education and Director of the ALIVE Research Lab at the University of British Columbia. Prior to joining UBC, Jillianne completed a Post-doctoral Research Fellowship at the Harvard Graduate School of Education and holds a PhD in Educational Psychology from Simon Fraser University."
                            position="Researcher and Learning Scientist"
                        />
                        <Card
                            name="Fred Gould"
                            imgURL={fredgould}
                            des="Dr. Fred Gould is Co-Director of the Genetic Engineering and Society Center of North Carolina State University and Director of the NSF-sponsored, interdisciplinary, graduate training program on Agricultural Biotechnology. He conducts research on the application of evolutionary biology and population genetics to enable sustainable use of insect resistant crops and genetically engineered agricultural pests. He also does research on strategies for development and use of engineered mosquitoes to decrease human disease. In this regard, Dr. Gould and his colleagues have studied the field ecology of the mosquito, Aedes aegypti, that vectors dengue virus. They have also developed a range of mathematical models to assess current gene drive systems and to conceptualize novel gene drive mechanisms. In 2011, Dr. Gould was elected to the U.S. National Academy of Sciences (NAS). He has served on several National Academy of Sciences Engineering and Medicine (NASEM) committees studying the environmental and health effects of the commercialization of genetically engineered crops. Dr. Gould chaired the 2014-2016 NASEM committee on “Genetically Engineered Crops: Experiences and Prospects” and was a reviewer of the NASEM 2016 report on Gene Drives. He serves on the NASEM’s Board on Agriculture and Natural Resources and is a member of the Target Malaria Ethics Committee. Dr. Gould received his BS in Biology from Queens College-CUNY, and a PhD in Ecology and Evolutionary Biology from the State University of New York at Stony Brook. He started work at NC State as a Postdoc in 1977."
                            position="Co-Director of Genetic Engineering"
                        />
                        <Card
                            name="James J Collins"
                            imgURL={jamescoll}
                            des="James J. Collins is Termeer Professor of Bioengineering in the Department of Biological Engineering and Institute for Medical Engineering & Science.  He is also affiliated with the Broad Institute and the Wyss Institute.  His research group works in synthetic biology and systems biology, with a particular focus on using network biology approaches to study antibiotic action, bacterial defense mechanisms, and the emergence of resistance. Professor Collins' patented technologies have been licensed by over 25 biotech, pharma and medical devices companies, and he has helped to launched a number of companies, including Sample6 Technologies, Synlogic and EnBiotix.  He has received numerous awards and honors, including a Rhodes Scholarship, a MacArthur 'Genius' Award, an NIH Director's Pioneer Award, a Sanofi-Institut Pasteur Award, as well as several teaching awards.  Professor Collins is an elected member of the National Academy of Sciences, the National Academy of Engineering, the Institute of Medicine, and the American Academy of Arts & Sciences, and a charter fellow of the National Academy of Inventors."
                            position="University Professor"
                        />
                        <Card
                            name="Dr. Eleanor Fish"
                            imgURL={eleanorfish}
                            des="Dr. Fish received her B.Sc. from the University of Manchester, UK, her M.Phil. from King’s College, University of London, UK and her Ph.D. from the Institute of Medical Science at the University of Toronto, Canada. Dr. Fish studies the interactions of cytokines, specifically interferons and chemokines, with their receptors in normal and diseased tissues and cells. A focus of Dr. Fish’s research is the investigation of host-pathogen interactions at the cellular and molecular level, specifically in the context of viruses and interferons. During the 2003 outbreak of SARS in Toronto, she initiated studies to investigate the therapeutic potential of interferon in SARS patients. Encouraging results have directed her group’s efforts toward examining type I interferons’ activities against a number of emerging infectious diseases, such as avian H5N1 and pandemic H1N1 influenza viruses. During the ebola virus outbreak in West Africa in 2013-2016, her studies focused on investigating the therapeutic effectiveness of interferon treatment for Ebola virus disease, with a clinical trial in Guinea, with positive outcomes. Dr. Fish was a member of a WHO Working Group to evaluate the therapeutic effectiveness of different antiviral interventions against Ebola virus.  Most recently, in an exploratory clinical study in Wuhan, China, she evaluated the therapeutic effectiveness of IFN-e treatment for COVID-19."
                            position="Researcher"
                        />

                        {/* Second weekend => 3-27 */}
                        <Card
                            name="Dr. Roger Azevedo"
                            imgURL={rogeraze}
                            des="Dr. Roger Azevedo is a Professor in the Department of Learning Sciences & Educational Research at the University of Central Florida. He is the Lead Scientist for UCF’s Learning Sciences Faculty Cluster Initiative. He received his doctorate from McGill University (1998) and completed his postdoctoral training in cognitive psychology at Carnegie Mellon University. His main research area includes examining the role of cognitive, metacognitive, affective, and motivational self-regulatory processes during learning with advanced learning technologies (e.g., intelligent tutoring systems, hypermedia, multimedia, simulations, serious games, immersive virtual learning environments)."
                            position="University Professor"
                        />
                        <Card
                            name="Michael Kay"
                            imgURL={michaelk}
                            des="Michael F. Kay is a Certified Financial Planner®, author and speaker on personal finance and financial life planning. He is the author of two books (The Feel Rich Project and The Business of Life) and he speaks and delivers workshops across the U.S.
                                His latest book, The Feel Rich Project, is about transforming your relationship with money—reaching clarity on what matters most and developing a personal plan to reach it.
                                He is the President of Financial Life Focus, LLC, a fee-only RIA firm in Livingston, NJ and a regular contributor to Psychology Today. Michael has previously written for Forbes and Inc., and is frequently quoted in the media.
                                Michael is married to his college sweetheart, Wendy and have 2 children and 2 granddaughters and a puppy named Phoebe."
                            position="Financial Planner and Author"
                        />
                        <Card
                            name="Tiger Sheng"
                            imgURL={tigersheng}
                            des="Tiger Sheng is a Global Markets Analyst at BMO Capital Markets, where he was responsible for designing and developing trading platforms and assisting in Global Markets’ day-to-day operations. He had exposure to multiple lines of businesses in Global Markets, including fixed income analytics, balance sheet solutions and structured products trading. He was able to leverage his financial and engineering skills to quickly identify existing inefficiencies and address them with technological solutions. Tiger holds a Bachelor of Applied Science in Computer Engineering from the University of Toronto. During his time as an engineering student, he showed his passion in finance and served as the president of University of Toronto Engineering Finance Association (UTEFA), where he constructed a platform to connect engineering students to the finance industry. He was also a top engineering student in his class, and he had been constantly working with the Engineering Faculty to explore and improve finance education in engineering programs."
                            position="Markets Analyst"
                        />

                        {/* Second weekend => 3-28 */}
                        <Card
                            name="Dr. Tara Deans"
                            imgURL={taradeans}
                            des="Dr. Tara Deans received her PhD from Boston University in Biomedical Engineering. Following her postdoctoral training at Johns Hopkins University, she became an Assistant Professor in Biomedical Engineering at the University of Utah. Currently, Dr. Deans runs an applied mammalian synthetic biology laboratory where her lab focuses on building novel genetic tools to study the mechanisms of stem cell differentiation for the purpose of directing cell fate decisions. Recently, Dr. Deans received four prestigious awards to support this area of research: 1. the NSF CAREER Award, 2. the Office of Naval Research (ONR) Young Investigator Award, 3. the NIH Trailblazer Award, and 4. an NIH Director’s New Innovator Award. In addition to her research, Dr. Deans was named a STEM Ambassador in the STEM Ambassador Program (STEMAP) at the University of Utah to engage underrepresented groups in STEM fields."
                            position="Assistant Professor"
                        />
                        <Card
                            name="Dr. Michelle Digman"
                            imgURL={michelledigman}
                            des="Michelle Digman is Associate Professor in the Department of Biomedical Engineering at the University of California Irvine. She is currently Co-equity advisor for the Henry Samueli School of Engineering, BME Associate Chair for Graduate Affairs, the Co-I of the Laboratory for Fluorescence Dynamics (a P41 NIH Center) and Director of W.M. Keck Nanoimaging Lab. She received her MS and PhD in Chemistry from University of Illinois at Chicago and did her postdoctoral work at the University of Illinois, Urban-Champaign in the Department of Physics.Dr. Digman is a Scialog Fellow and has won several awards including the NSF-CAREER award, the Hellman Fellowship, the Fluorescence Young Investigator Award from the Biophysical Society, the Faculty Innovation in Teaching award and has received the Henry Samueli Career Development Chair. She has co-authored over 90 peer reviewed manuscripts and 6 book chapters. Her current research interest focuses on quantitative spatial and temporal correlation spectroscopies, protein dynamics during cell migration, characterizing metabolic alterations in cells and tissues, and developing novel imaging technologies. In addition to research and teaching, Dr. Digman is passionate about community outreach. She initiated the outreach program for minority community college students and outstanding high school students called Undergraduate Student Initiative for Biomedical Research (USIBR), which has been in operation since 2011. Her goals are to continue with a strong, collaborative and productive laboratory engaging in growth and development of her research group through targeted teaching, mentoring and aiding in the strategic growth of the University though service, increase diversity initiatives and collaboration."
                            position="Associate Professor"
                        />
                        <Card
                            name="Dr. Chang Liu"
                            imgURL={changliu}
                            des="Chang Liu is an Associate Professor of Biomedical Engineering, Chemistry, and Molecular Biology and Biochemistry at UC Irvine. Liu was born in 1982 in Shanghai, China and grew up in Tucson, AZ. Starting at a young age, Liu pursued a career as a concert pianist, but shifted his primary interest to chemistry when he was a sophomore at Harvard, where he conducted undergraduate research with Professor Stuart Schreiber. After graduating summa cum laude and Phi Beta Kappa from Harvard in 2005 with a bachelor’s degree in chemistry, Liu joined the laboratory of Professor Peter Schultz at the Scripps Research Institute. There, he expanded the genetic code of bacteria for the co-translational incorporation of otherwise post-translational modifications and provided the first demonstrations that expanded genetic codes can be selectively advantageous in the evolution of novel protein function. Liu earned his PhD in chemistry in 2009, after which he became a Miller Fellow at UC Berkeley. Working with Professor Adam Arkin, Liu conducted research in the field of synthetic biology and developed methods for the predictable creation of complex regulatory systems. In 2013, Liu started his lab at UC Irvine."
                            position="Associate Professor"
                        />

                    </div>



                </div>
            </div>
        )
    }
}
