import React from "react";
import Card from "./NewTeam/TeamCard";
import jamie from "./Speakers/Jamie.JPG"; 
import yang from "./Speakers/Yang.jpg"; 
import sandoval from "./Speakers/Sandoval.png"; 
import henry from "./Speakers/Henry.png"; 
import birman from "./Speakers/Birman.jpg"; 
import kitchloo from "./Speakers/Kitchloo.jpg";
import krishnedu from "./Speakers/Krishnedu.jpg";
import zhaxybayeva from "./Speakers/Zhaxybayeva.jpg";
import holz from "./Speakers/Holz.jpeg";
import vuong from "./Speakers/Vuong.jpg";
import gleiser from "./Speakers/Gleiser.jpg";
import frommer from "./Speakers/Frommer.jpg";
import koch from "./Speakers/Koch.jpg";
import schmitt from "./Speakers/Schmitt.jpg";
import aidala from "./Speakers/Aidala.jpg";
import cuellar from "./Speakers/cuellar.png";
import loeb from "./Speakers/Loeb.jpg";
import le from "./Speakers/Le.jpg";
import Papa from 'papaparse';
import speakers from './speakers.csv';
import akshaya from "./Speakers/akshaya.jpg"; 
import allison from "./Speakers/jia.jpg"; 
import william from "./Speakers/lin.jpg"; 
import constantinescu from "./Speakers/constantinescu.jpg"; 
import odom from "./Speakers/odom.jpg"; 
import boyer from "./Speakers/boyer.png"; 
import tanton from "./Speakers/tanton.jpg"; 
import hull from "./Speakers/thomas-hull-origami.jpg";
import jed from "./Speakers/jed.jpg"; 
import graham from "./Speakers/graham.jpg";
import patrascu from "./Speakers/patrascu.jpeg";  
import nick from "./Speakers/nick.png";
import ellenyoo from "./Speakers/ellenyoo.jpeg";
import chon from "./Speakers/chon.jpg";
import dang from "./Speakers/dang.jpg";
import tiffanyu from "./Speakers/tiffanyu.jpeg";
import kylie from "./Speakers/kylie.jpeg";
import adela from "./Speakers/adela.JPG";
import annazhao from "./Speakers/annazhao.jpeg";
import jisulee from "./Speakers/jisulee.jpeg";
import davidhan from "./Speakers/davidhan.JPG";
import samanthahong from "./Speakers/samanthahong.jpg";
import jennifer from "./Speakers/jennifer.jpg"; 


export default function NewTeam() {
   
    return (<div class="new-team-con">
        <div class="new-team">
            <h1>Meet Our Speakers</h1>
            <h2>More to come soon!</h2>
            <div class="con">

                <Card
                    name="Dr. Anshul Kundaje"
                    imgURL="data:image/jpeg;base64,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"
                    des="
                    Anshul Kundaje is an Assistant Professor of Genetics and Computer Science at Stanford University. The Kundaje lab develops statistical and machine learning methods for large-scale integrative analysis of functional genomic data to decode regulatory elements and pathways across diverse cell types and tissues and understand their role in cellular function and disease. Anshul completed his Ph.D. in Computer Science in 2008 from Columbia University. As a postdoc at Stanford University from 2008-2012 and a research scientist at MIT and the Broad Institute from 2012-2014, he led the integrative analysis efforts for two of the largest functional genomics consortia - The Encyclopedia of DNA Elements (ENCODE) and The Roadmap Epigenomics Project. Dr. Kundaje is a recipient of the 2019 Chen Award of Excellence from the Human Genome Organization, 2016 NIH Director’s New Innovator Award and The 2014 Alfred Sloan Foundation Fellowship. Anshul is also a member of the NIH Director's Advisory Committee for Artificial Intelligence in Biomedical Research."
                    position="Assistant Professor at Stanford"
                />

                <Card
                    name="Dr. Krishnendu Chakrabarty"
                    imgURL={krishnedu}
                    des="Krishnendu Chakrabarty is the John Cocke Distinguished Professor and Department Chair of Electrical
                    and Computer Engineering (ECE), and Professor of Computer Science, at Duke University. He has held
                    Visiting Professor positions and Chair Professorships at University of Tokyo (Japan), University of
                    Bremen (Germany), Tsinghua University (China), National Tsinghua University (Taiwan) and National
                    Cheng-Kung University (Taiwan).
                    Prof. Chakrabarty’s current research projects include: design-for-testability of integrated circuits and
                    systems (especially 3D integration and system-on-chip); microfluidic biochips; hardware security;
                    machine learning for eHealth; neuromorphic computing systems. He is a Fellow of ACM, IEEE, AAAS,
                    and a Golden Core Member of the IEEE Computer Society."
                    position="John Cocke Distinguished Professor of Electrical and Computer Engineering"
                />

                
                <Card 
                    name="Dr. Jamie Spangler"
                    imgURL = {jamie}
                    des="Dr. Jamie Spangler earned a Bachelor of Science degree in Biomedical Engineering at
Johns Hopkins University and went on to conduct her Ph.D. research in Biological
Engineering in Professor K. Dane Wittrup’s group at MIT, studying antibody-mediated
down-regulation of epidermal growth factor receptor as a new mechanism for cancer
therapy. She then completed a postdoctoral fellowship in Professor K. Christopher
Garcia’s lab in the Molecular and Cellular Physiology and Structural Biology departments
at Stanford University School of Medicine, focusing on engineering cytokine systems to
bias immune homeostasis. Dr. Spangler launched her independent research group at
Johns Hopkins University in July 2017, jointly between the departments of Biomedical
Engineering and Chemical and Biomolecular Engineering. In particular, her group is interested in
engineering immune molecules such as cytokines, growth factors, and antibodies for
targeted treatment of diseases such as cancer and autoimmune disorders."
                    position="Assistant Professor at Johns Hopkins University"
                /> 


                <Card 
                    name = "Dr. Xia Yang"
                    imgURL = {yang}
                    position = "Assistant Professor at UCLA"
                    des = "Xia Yang, Ph.D. is currently a tenured Professor in the Department of Integrative Biology and Physiology and a faculty member of the Institute for Quantitative and Computational Biosciences at UCLA. Her lab focuses on developing and applying multi-tissue multi-omics systems biology approaches to understand the gene networks perturbed by genetic and environmental risks of complex human diseases, ranging from cardiometabolic diseases to neurodegenerative and neurological disorders. She received her PhD in Molecular Genetics with an emphasis on Bioinformatics from Georgia State University and obtained postdoctoral training in Systems Genetics at UCLA under the guidance of Dr. A. Jake Lusis. She subsequently worked as Senior Scientist at Rosetta Inpharmatics/Merck & Co. and Director of Systems Biology at Sage Bionetworks before returning to UCLA as a faculty member."

                /> 

                <Card 
                    name = "Dr. Isaac Cervantes Sandoval"
                    imgURL = {sandoval}
                    position = "Assistant Professor at Georgetown"
                    des = "I received my MSc and Ph.D. in Chemical and Biological Sciences from the National School for Biological Sciences of the National Polytechnic Institute in Mexico City, Mexico. During my graduate work, I focused on the physiopathology and host immune response in free-living amoebae infections, using both in vivo and in vitro approaches.  Upon the completion of my Ph.D., I decided to move into the more challenging field of Neuroscience. I joined the Neuroscience Department at The Scripps Research Institute in 2009 to expand my technical skills and neuroscience knowledge. There, my research has focused on understanding how memories are encoded, consolidated, retrieved, and, most recently, how these are forgotten.  In 2019 I moved as an Assistant Professor at Georgetown University, where I will continue to develop a research program to understand how memories are encoded in the brain and how they are forgotten. "
                /> 

                <Card
                    name = "Dr. Ken Birman"
                    imgURL = {birman}
                    position = "N. Rama Rao Professor of Computer Science at Cornell"
                    des = "Ken Birman is the N. Rama Rao Professor of Computer Science at Cornell. An ACM Fellow and the winner of the IEEE Tsutomu Kanai Award, Ken has written 3 textbooks and published more than 150 papers in prestigious journals and conferences. Software he developed operated the New York Stock Exchange for more than a decade without trading disruptions, and plays central roles in the French Air Traffic Control System and the US Navy AEGIS warship. Other technologies from his group found their way into IBM’s Websphere product, Amazon’s EC2 and S3 systems, Microsoft’s cluster management solutions, and the US Northeast bulk power grid. His new Derecho and Cascade systems are intended for demanding settings such as the smart power grid, smart highways and homes, and scalable vision applications."
                
                /> 

                <Card 
                    name = "Dr. Nitu Kitchloo"
                    imgURL = {kitchloo}
                    position = "Professor and Chair of Mathematics at Johns Hopkins University"
                    des = "Nitu Kitchloo is a professor in the Department of Mathematics at Johns Hopkins. In the early part of Professor Kitchloo's career, he was an assistant professor at Johns Hopkins before moving to the University of California, San Diego as an associate professor in 2004. In 2010, he returned to Johns Hopkins as a professor."
                /> 

                <Card 
                    name = "Dr. Richard Conn Henry"
                    imgURL = {henry}
                    position = "Professor of Physics and Astronomy at Johns Hopkins University"
                    des = "Dick Henry is an astronomer, who has fallen in love with physics, and who loves to talk about the nature of physics! Dick always thought physics was very difficult; indeed incomprehensible; until he finally saw through it! He will tell you how to get there fast! The essential discovery was made thousands of years ago by Pythagoras in Greece, and even earlier by others in India and China. The universe is mathematical in its very bones. And high-school mathematics is all that you need to grasp that. "
                />

                <Card 
                    name = "Dr. Olga Zhaxybayeva"
                    imgURL = {zhaxybayeva}
                    position = "Associate Professor of Biological Sciences at Dartmouth College"
                    des = "My research interests are to understand how microbes change over time. Recent advances in DNA sequencing technologies brought us an avalanche of data: thousands of genomes and terabases of environmental DNA (metagenomes). I mine these data sets to assess the impact of horizontal gene transfer on microbial populations, find new ways to characterize microbial communities, and track down genomic signatures of microbial adaptations."
                />

                <Card 
                    name = "Dr. Teri Odom"
                    position = "Charles E. and Emma H. Morrison Professor of Chemistry at Northwestern University"
                    des = "Teri W. Odom is an expert in designing structured nanoscale materials that exhibit extraordinary size and shape-dependent optical properties. Odom has pioneered a suite of multi-scale nanofabrication tools that has resulted in flat optics that can manipulate light at the nanoscale and beat the diffraction limit, plasmon-based nanoscale lasers that exhibit tunable color, and hierarchical substrates that show controlled wetting and super-hydrophobicity. She has also invented a class of biological nanoconstructs that are facilitating unique insight into nanoparticle-cell interactions and that show superior imaging and therapeutic properties because of their gold nanostar shape."
                    imgURL = {odom}
                /> 

                <Card 
                    name = "Dr. Corina Constantinescu"
                    imgURL = {constantinescu}
                    position = "Professor of Mathematics at the University of Liverpool" 
                    des = "Corina Constantinescu is Professor of Mathematics and Director of the Institute for Financial and Actuarial Mathematics, in the Department of Mathematical Sciences, at the University of Liverpool. Prior to being an academic, Corina worked as an actuary and led the life insurance department of one of the first private Romanian insurance companies. Her academic career spans the US, Austria, France, and Switzerland and she often travels to Europe, Africa, Australia, India, China and Japan on research visits or conference meetings. Given her practical perspective, many of her papers are published in actuarial journals, however she also publishes in applied probability journals. She serves as associate editor in a number of actuarial journals and is part of the publicity team of Bernoulli Society for Mathematical Statistics and Probability. During 2012-2016, she coordinated a large European grant under the Marie Curie framework, on Risk Analysis, Ruin and Extremes (RARE), that connected 12 higher education institutions and over 60 researchers from all over the world working on extreme events and their applications to insurance modelling. Her expertise is in analytical methods for deriving exact or asymptotic results for ruin probabilities, with light or heavy-tailed assumptions in complex insurance risk models. A more recent research interest of hers is financial inclusion, namely correctly pricing and regulating microfinance and microinsurance practices."
                /> 

                <Card 
                    name = "Dr. Daniel Holz"
                    imgURL = {holz}
                    position = "Professor of Astronomy and Astrophysics at UChicago"
                    des = "I am a Professor at the University of Chicago, in the Enrico Fermi Institute, the Department of Physics, the Department of Astronomy and Astrophysics, and the Kavli Institute for Cosmological Physics.

My research focuses on gravitational waves. I am particularly interested in what we can learn about physics, astronomy, and cosmology from our detections of gravitational wave sources.

I am a member of LIGO."
                />
                
                <Card 
                    name = "Dr. Stephen Boyer"
                    imgURL = {boyer}
                    position = "Google Cheminformatics Scientific Advisor"
                    des = "Steve Boyer is a researcher in the interdisciplinary space of chemistry and
computer science. He pioneered the use of computers to curate patents and
scientific literature in the life and physical sciences.
Has has worked in synthesis at Novartis, in data science at IBM Research, and
currently as a scientific advisor at Google."
                /> 

                <Card 
                    name = "Dr. Helen Vuong"
                    imgURL = {vuong}
                    position = "Professor of Integrative Biology and Physiology at UCLA"
                    des = "Helen Vuong earned her B.S. in neuroscience from the University of California, Los Angeles (UCLA). She continued her graduate education at UCLA, earning her Ph.D. in molecular, cellular and integrative physiology under the mentorship of Dr. Nicholas C. Brecha. She began her postdoctoral tenure in Dr. Elaine Y. Hsiao’s lab. In her postdoctoral research, Vuong aims to elucidate the role of the maternal microbiome in fetal brain development, including modulation of neuronal connectivity, activity and function. In particular, she will focus on specific bacteria species that affect serotonin synthesis and serotonin’s role in brain development. Additionally, as an IRACDA fellow in UCLA’s UPLIFT program, she hopes to continue her research and pursue her passion in education and outreach, eventually developing and implementing an introductory gut—brain axis laboratory course."
                />

                <Card 
                    name = "Dr. Marcelo Gleiser"
                    imgURL = {gleiser}
                    position = "Professor of Physics and Astronomy at Dartmouth College"
                    des = "Marcelo Gleiser is the Appleton Professor of Natural
                    Philosophy and a professor of physics and astronomy at
                    Dartmouth College. He obtained his Ph.D. from Kings
                    College London and received the 1994 Presidential Faculty
                    Fellows Award from the White House. He is a Fellow and
                    past General Councilor of the American Physical Society. He
                    is the 2019 Templeton Prize Laureate, an honor he shares
                    with Mother Tereza, Archbishop Desmond Tutu, the Dalai
                    Lama, and scientists Freeman Dyson and Martin Rees. Also
                    in 2019, he won the Education Leadership Award from
                    Educando by Worldfund Foundation.
                    He is the co-founder of the NPR blog on science and
                    culture. He currently directs the Institute for Cross-
                    Disciplinary Engagement at Dartmouth College."
                />

                <Card 
                    name = "Dr. Jane Frommer"
                    imgURL = {frommer}
                    position = "Research Scientist at IBM Research"
                    des = "Dr. Jane Frommer received the 2020 Perkin Medal for bringing chemical awareness to
                    pioneering research areas in physics and engineering. She has authored over 100
                    articles and is co-inventor on over 50 issued patents in the fields of electronically
                    conducting polymers and scanning probes based on tunneling and atomic force.
                    The analytical methods she developed are critical in the growth of nanotechnology. Through fundamental research she fostered
                    generations of students and upheld international presence as a scientist, collaborator,
                    and mentor. Dr. Frommer’s research environments have included bio-organic undergraduate
                    research at MIT, Vitamin D research at the Mass General Hospital, organometallic
                    synthesis at Caltech, electronically conducting polymers at Honeywell (Allied), and
                    atomic force measurements in material science at IBM Research. Her chemistry
                    degrees are from Tufts University (BS) and Caltech (PhD)."
                />

                <Card 
                    name = "Dr. Jens Koch"
                    imgURL = {koch}
                    position = "Associate Professor of Physics at Northwestern University"
                    des = "Jens Koch’s research interests in theoretical condensed matter physics include strongly correlated quantum systems, quantum information processing with solid-state devices as well as transport and coherence in nanoscale systems. Koch explores the exciting prospects of applying quantum circuit devices as artificial atoms in quantum computation and quantum optics and, in collaboration with several experimental groups, studies coherence of novel quantum circuits. His second research thrust focuses on larger array systems composed of Josephson-junction based circuits (superconducting qubits) and superconducting microwave resonators."
                />

                <Card 
                    name = "Corrine Yap"
                    position = "Mathematics PhD Student at Rutgers University"
                    des = "Corrine is currently in the mathematics Ph.D. program at Rutgers University doing research in probabilistic combinatorics. She received a B.A. in mathematics and theater from Sarah Lawrence College, and as an undergraduate, she spent time studying math in Budapest and theater in Moscow. In 2016, she first performed her original one-woman play called Uniform Convergence, which explores the struggles of two women (historical mathematician Sofia Kovalevskaya and a fictional Asian-American math professor) trying to find their place in the academic world. Over the past three years, Corrine has performed at over 15 venues, including college math departments, high school programs, the national conference MAA MathFest, and Off-Broadway with the Pan-Asian Repertory Theater."
                    imgURL = "https://www.math.rutgers.edu/images/comprofiler/934_59b73dd363883.jpg"
                /> 

                <Card
                    name = "Dr. Tom Hull"
                    des = "Thomas Hull, an Associate Professor of mathematics at Western New England University, is considered a leading expert on origami mathematics as well as an accomplished paper folder. He has written origami instruction books, numerous origami-math research papers, and authored Project Origami (AK Peters/CRC Press), a book on encorporating the mathematics of paper folding into college-level math classes. He received his Ph.D. in graph theory from the University of Rhode Island, and his research papers on origami-math were helpful in generating interest in the subject during the 1990s. He has been invited to speak on origami-math to audiences all over the USA as well as Japan, Puerto Rico, and Europe. His most popular origami creations are the PHiZZ unit, which has infected the fingers of procrastinators world-wide, and the Five Intersecting Tetrahedra model, which was voted by the British Origami Society as one of the top 10 origami models of all time."
                    position = "Associate Professor of Mathematics Western New England University"
                    imgURL = {hull}

                /> 

                <Card 
                    name = "Dr. James Tanton" 
                    des = "James Tanton earned his PhD in mathematics from Princeton University. He is an author, a consultant, and ambassador for the Mathematical Association of America in Washington D.C., chair of the Advisory Council for the National Museum of Mathematics, and a founder of the Global Math Project, an initiative to transform the entire world’s perception of what mathematics can, and should, be. This program has now reached over 6 million students and teachers across the planet."
                    position = "Mathematician-at-Large at the Mathematical Association of America in Washington D.C."
                    imgURL = {tanton}
                /> 

                <Card 
                    name = "Akshaya Annapragada"
                    position = "Johns Hopkins University MD/PhD Student"
                    des = "Akshaya is an MD-PhD student at the Johns Hopkins University School of Medicine. She is broadly interested in computer science, mathematics and biology, and the ways that these fields intersect with medicine, health care and policy. Akshaya grew up in Houston, TX and moved to Cambridge, MA for college at Harvard University. At Harvard, she graduated magna cum laude with highest honors in Applied Mathematics and also earned an MS in Engineering Sciences. She served as a research assistant at the School of Engineering and Applied Sciences and School of Public Health. She also wrote and edited for the Harvard Political Review, and was involved in advocacy and mentorship through Women in Computer Science. Her current research focuses on how computational and engineering tools can be used to advance health care and medicine."
                    imgURL = {akshaya}
                /> 
                
                <Card 
                    name = "Dr. Christine Aidala"
                    imgURL = {aidala}
                    position = "Associate Professor of Physics at UMichigan"
                    des = "Professor Aidala works in experimental high-energy nuclear physics, on the border between nuclear and particle physics. Her research is focused on nucleon structure and quantum chromodynamics (QCD), the theory of the strong force. She’s particularly interested in spin-momentum correlations inside the proton, loosely analogous to the quantum electrodynamical spin-orbit and spin-spin couplings in the hydrogen atom."
                />

                <Card 
                    name = "Dr. Vicki Colvin"
                    imgURL = "https://www.brown.edu/academics/chemistry/sites/academics-chemistry/files/styles/large/public/images/people/Colvin_Vicki%20%281%29.jpg?itok=m2OlyAHA"
                    des = "Dr. Vicki Colvin is a Professor of Chemistry, Engineering, Molecular Pharmacology, Physiology, and Biotechnology, as well as the director for the center of Biomedical Engineering at Brown University. Her research interests include nanomaterials synthesis, magnetic materials, environmental fate and transport of colloids, biologically compatible nanomaterials, and magnetic and electrical imaging in complex environments."
                    position = "Professor of Chemistry at Brown University"

                /> 
                
                <Card 
                    name = "Dr. Michael Marletta"
                    imgURL = "https://vcresearch.berkeley.edu/sites/default/files/styles/faculty_photo_full/public/2018-08/marletta_michael_0.jpg?itok=BcLRCEOH"
                    des = "Questions under investigation in the Marletta laboratory lie at the interface of chemistry and biology with a particular emphasis on the study of protein function and enzyme reaction mechanisms and a focus on molecular answers to complex function in biology."
                    position = "Professor of Chemistry and Molecular Biology at UC Berkeley" 
                /> 

                <Card
                    name = "William Lin"
                    position = "IOI 2019 Finalist"
                    imgURL = {william}
                    des = "I am an incoming freshman at MIT and I'm planning to study CS. My passion for programming began in third grade and throughout secondary school, I've participated in various related contests, such as the AMC series and USACO."
                /> 

                <Card
                    name = "Allison Jia"
                    position = "Stanford Undergraduate Student" 
                    des = "Allison Jia is a student researcher, aspiring biomedical engineer, and recently graduated senior from The Harker School in San Jose, California. In 2019, Allison received the Intel Foundation Young Scientist Award at the International Science and Engineering Fair for her work in creating a live-imaging platform to visualize the neurodegeneration process responsible for diseases like Alzheimer's. Throughout high school, Allison served as the President of the Bay Area Society for Neuroscience and the Vice President of her school's research club. She is an avid supporter of STEM education and especially women in STEM. Allison is looking forward to continuing her studies at Stanford University in the fall." 
                    imgURL = {allison}
                /> 


                <Card 
                    name = "Dr. Lorie Loeb"
                    imgURL = {loeb}
                    position = "Research Associate Professor of Computer Science at Dartmouth College"
                    des = "My work is about creating well-designed technology tools that change the way people think and behave. Information is everywhere, in large quantity and questionable quality—monitors are ubiquitous, over 100 hours of video are uploaded to YouTube every minute, and the Internet contains over 3.3 billion pages. People quickly shut down or ignore information when too much is given, is hard to understand, or difficult to accept. My research focuses on effective methods for presenting and visualizing information in order to get people’s attention, communicate effectively, and change behavior."
                />

                <Card 
                    name = "Dr. My T. Le"
                    imgURL = {le}
                    position = "Visiting Lecturer at Stanford for Electrical Engineering" 
                    des = "My T. Le is a technologist, entrepreneur, and educator. She received her Ph.D. in Electrical Engineering and Computer Sciences from University of California, Berkeley. She works, advises and invests in start-ups. She co-teaches EE15 - a popular Freshman Seminar and teaches EE46 - Engineering for Good - at Stanford University. In her spare time, she can be found telling bad jokes to her daughters and being a member of Dub Nation."
                />
                <Card 
                    name = "Jed Doherty"
                    imgURL = {jed}
                    des = "I have had the honor of inspiring kids and families to practice kindness, make healthy choices and grow closer through reading. I am currently the host of the Reading With Your Kids Podcast. We are committed to inspiring families to read more together. I also present motivational presentations throughout the United States and Puerto Rico. I have presented at thousands of schools and special events including Connectfest Christian Music Festival, New Bedford New Year's Eve Celebration, Archdiocese of Boston Multicultural Family Day, Diocese of Brooklyn Anti Bullying Summit, Pennsylvania State Association of School Nurses, Norwalk CT DARE Graduation and Harvard School of Medicine. I also produced and wrote the award winning disabilities awareness video Meltdown! featuring the music of Gloria Estefan. "
                    position = "Co-Host of Solve it! for Kids and Host ofReading with your Kids Podcast" 
                />
                <Card 
                    name = "Jennifer Swanson"
                    imgURL = {jennifer}

                    position = "Speaker. Author. Teacher. " 
                    des = "Science Rocks! And so do Jennifer Swanson’s books. She is the award-winning author of over 40 nonfiction books for children, mostly about science and technology.  Jennifer’s love of STEM began when she started a science club in her garage at the age of 7. While no longer working from the garage, Jennifer's passion for science and technology resonates in all her books but especially, BRAIN GAMES (NGKids) and SUPER GEAR: Nanotechnology and Sports Team Up (Charlesbridge), Astronaut-Aquanaut, and Save the Crash-test Dummies. Her books have received many accolades including the Green Earth Book Honor Award, a Florida Book Award, and multiple California Reading Association awards, and National Science Teaching BEST STEM awards."
                />
                <Card
                    name = "Vasile Patrascu"
                    imgURL = {patrascu}
                    position = "Principal Engineer at Jitterbit"
                    des = "A 'hands-on' principal software engineer with a 'can do' attitude that delivers high-quality projects on time. My objective is to have significant impact in a role that leverages my extensive experience in product definition, architecture, design and development."
                /> 
                <Card 
                    name = "Dr. Sonia Cuellar"
                    imgURL={cuellar}
                    position = "Schmahl Science Workshops Mentor & Biological Sciences Educator"
                    des="I attended college at National University of Colombia where I became interested in crop’s biology. Moved to Mexico for graduate studies at UNAM’s Biotechnology Institute where I obtained Master and PhD degrees in 2001 and 2008. Always interested in plant’s responses to stress, in grad school I focused my attention on cell wall proteins and carbon metabolism. In 2009 accepted a postdoctoral position at UC -Davis where I continued studying plants’ adaptation to stress and entered the world of genomics and large data set analysis. In 2017 I joined SJSU’s College of science where I teach Introduction to biology, introduction to chemistry and biochemistry.

I love teaching sciences and mentoring teenagers in their research projects. When I am not doing that you may find me walking around downtown San Jose with my dog Frankie"
                    // use stem world (9) compressed pdf 
                /> 
                <Card 
                    name = "Dr. Jason Graham"
                    position = "Schmahl Science Workshops Mentor & Entomologist"
                    des="Dr. Jason Graham is a bee researcher and has worked with honey bees and beekeepers for 12+ years. He earned his PhD in the Honey Bee Research and Extension Laboratory at University of Florida. For his post-doctoral work, Dr. Graham studied the known populations of Hawaiian yellow-faced bees and contributed data that helped to list these pollinators as endangered species. He has presented his bee research at the Smithsonian Museum in Washington DC, has led field trips for the IUCN (International Union for Conservation of Nature), and his research has been featured by National Geographic."
                    imgURL = {graham}
                /> 

                <Card 
                    name = "Nick Young"
                    des="Nick Young is a rising sophomore at Brown University studying Pure Mathematics and Computer Science. Back in high school, he was heavily interested in public speaking and international affairs, but made a pivot towards STEM, having explored engineering, pure maths, applied maths, chemistry, and finally settling on computer science in university. He is currently working at a fashion-tech startup and a machine learning hardware accelerator and is interested in web development, deep learning, and databasing."
                    imgURL = {nick}
                />

                <Card 
                    name = "Lauren Young"
                    des="Lauren is a sophomore at Brown University studying computer science with a focus on software design and UI/UX. She enjoys web/app development and all things frontend, and she currently researches human-computer interaction at Brown HCI Lab. Lauren is involved with Hack@Brown, Women in Computer Science, and the Meiklejohn Peer Advising Program."
                    
                />

                <Card 
                    name = "Ellen Yoo"
                    des="Ellen is a sophomore at Brown studying Environmental Engineering. She is currently researching in a paleoclimate lab and studying the potential of ocean biomarkers in collecting climate change data."
                    imgURL = {ellenyoo}
                />

                <Card 
                    name = "Ashley Chon"
                    des="At Brown, Ashley is currently involved in the Society of Women Engineers ExecutiveBoard, Meiklejohn Peer Advising Leadership Committee, Brown University Orchestra, and Brown Entrepreneurship Program’s Women’s Empowerment Team. Before Brown, she was a finance lead on the Dublin Lemelson-MIT InvenTeam through her high school’s engineering and design academy."
                    imgURL = {chon}
                />

                <Card 
                    name = "David Han"
                    des="David Han is hoping to major in Applied Math-Computer Science. He has contributed to multiple web and phone based projects as a member of Full Stack at Brown and is currently conducting research with the Brown Visual Computing Lab. Within this lab, he is building on interface to create and store a database of 3-Dimensional indoor scenes."
                    imgURL = {davidhan}
                />

                <Card 
                    name = "Anna Zhao"
                    des="She is working as an intern for a non-profit startup where she is developing a website portal, and she is interested in pursuing data science and graphics! Anna's favorite CS class this year was Object Oriented Programming where she created fun games such as Tetris and Pacman."
                    imgURL = {annazhao}
                />

                <Card 
                    name = "Samantha Hong"
                    des="She is considering pursuing a degree in computational biology and has been interested in computer science since taking her first course in the field her freshman year in college. She is also planning on going to medical school after undergrad. In high school, she participated in the school orchestra and the girls soccer team and graduated as valedictorian."
                    imgURL = {samanthahong}
                />

                <Card 
                    name = "Jisu Lee"
                    des="Jisu Lee was co president and founder of CSF as well as a KP Launch intern in high school. Currently she is an intern for Peacefully where she writes public health articles and Breathe, an anti tobacco organization. In the future she hopes to get involved in public health but is exploring various healthcare sectors including nursing and occupational therapy."
                    imgURL = {jisulee}
                />

                <Card 
                    name = "Kylie Ha"
                    des="Kylie Ha is a rising sophomore at Case Western Reserve University, majoring in nursing and minoring in Business Management. She was a co-founder of CSF and a member of NHS and Interact Club in high school. She is currently an active member in NSNA and is a part of morale committee in SpartanTHON at her college. She hopes to go into pediatrics and become a nurse practitioner in the future."
                    imgURL = {kylie}
                />

                <Card 
                    name = "Adela Kim"
                    des="Adela Kim is a 3rd-year nursing student at UCLA. Her plan is to be a nurse practitioner specializing in neonatal care or pediatrics. She aspires to be a better communicator and advocate for underprivileged groups. Currently, she is partnered with Project Roomkey to provide housing and meals for homeless people in Los Angeles County. She also has experience working with patients in hospitals and studies cells and proteins in a research lab."
                    imgURL = {adela}
                />

                <Card 
                    name = "Helen Zhao"
                    des="Helen Zhao is a second-year nursing student at UCLA. She is  interested in specializing in neonatology and working in the NICU. During her time at UCLA, she volunteered at a pediatrics office, Ronald Reagan UCLA Medical Center, and a research lab studying chorioamnionitis. She was also the public relations chair of Nursing Students at UCLA and an illustrator for the Daily Bruin."
                    
                />

                <Card 
                    name = "Cynthia Dang"
                    des="Cynthia Dang is currently involved in the Care Extenders Internship Program as the Pediatric Department Coordinator where she works  on the Pediatric Floor of Ronald Reagan UCLA Medical Center to train volunteers of the program and assist the pediatric patients and their family members. She is also in Team HBV as VP of Recruitment and Training of the UCLA Chapter and Public Relations Advisor of the Collegiate Advisory Board."
                    imgURL = {dang}
                />

                <Card 
                    name = "Tiffany Yu"
                    des="Tiffany Yu is a rising senior at UC Berkeley and double majors in Public Health and Data Science. She is involved with Team HBV and served as VP of Outreach for the UC Berkeley Chapter, and delivered a presentation on Asian American health advocacy strategies at the 2019 Team HBV National Collegiate Conference at Harvard University. Beyond her passion for health promotion and community outreach, she is also interested in American health policy, health innovation, and the growing intersection between healthcare and technology."
                    imgURL = {tiffanyu}
                />

                <Card 
                    name = "Jessica Lee"
                    des="Jessica Lee is currently a Master's student at Keck Graduate Institute with a Biology degree from UC Irvine. Her passion for healthcare grew in college when she worked in a stem cell lab at the UCI School of Medicine to determine stem cell-based therapies to treat retinal degeneration. She later became involved in Team HBV during graduate school, where she served as VP Finance and later as Co-Chair of the National Advisory Board for this year. She also serves as a board member of her school's newly-formed Free Clinic where we serve underserved populations in the Pomona area. She is also excited to be conducting clinical research this year for her Master's Thesis that aims to improve stroke outcomes."
                    
               />


            </div>
        </div>
    </div>
    )
}
// imgURL name des