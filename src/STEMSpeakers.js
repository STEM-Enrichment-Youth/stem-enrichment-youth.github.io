import React from "react";
import Card from "./NewTeam/TeamCard";
import jamie from "./Speakers/Jamie.JPG"; 
import yang from "./Speakers/Yang.jpg"; 
import sandoval from "./Speakers/Sandoval.png"; 
import henry from "./Speakers/Henry.png"; 
import birman from "./Speakers/Birman.jpg"; 
import kitchloo from "./Speakers/Kitchloo.jpg"; 


export default function NewTeam() {
    return (<div class="new-team-con">
        <div class="new-team">
            <h1>Meet Our Speakers</h1>
            <h2>More to come soon!</h2>
            <div class="con">

                <Card
                    name="Anshul Kundaje"
                    imgURL="data:image/jpeg;base64,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"
                    des="
                    Anshul Kundaje is an Assistant Professor of Genetics and Computer Science at Stanford University. The Kundaje lab develops statistical and machine learning methods for large-scale integrative analysis of functional genomic data to decode regulatory elements and pathways across diverse cell types and tissues and understand their role in cellular function and disease. Anshul completed his Ph.D. in Computer Science in 2008 from Columbia University. As a postdoc at Stanford University from 2008-2012 and a research scientist at MIT and the Broad Institute from 2012-2014, he led the integrative analysis efforts for two of the largest functional genomics consortia - The Encyclopedia of DNA Elements (ENCODE) and The Roadmap Epigenomics Project. Dr. Kundaje is a recipient of the 2019 Chen Award of Excellence from the Human Genome Organization, 2016 NIH Director’s New Innovator Award and The 2014 Alfred Sloan Foundation Fellowship. Anshul is also a member of the NIH Director's Advisory Committee for Artificial Intelligence in Biomedical Research."
                    position="Assistant Professor at Stanford"
                />

                
                <Card 
                    name="Jamie Spangler, PhD"
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
Engineering and Chemical and Biomolecular Engineering. Her lab, located in the
Translational Tissue Engineering Center at the School of Medicine, applies structural
and mechanistic insights to re-engineer existing proteins and design new proteins that
therapeutically modulate the immune response. In particular, her group is interested in
engineering immune molecules such as cytokines, growth factors, and antibodies for
targeted treatment of diseases such as cancer and autoimmune disorders."
                    position="Assistant Professor at Johns Hopkins University"
                /> 


                <Card 
                    name = "Xia Yang"
                    imgURL = {yang}
                    position = "Assistant Professor at UCLA"
                    des = "Xia Yang, Ph.D. is currently a tenured Professor in the Department of Integrative Biology and Physiology and a faculty member of the Institute for Quantitative and Computational Biosciences at UCLA. Her lab focuses on developing and applying multi-tissue multi-omics systems biology approaches to understand the gene networks perturbed by genetic and environmental risks of complex human diseases, ranging from cardiometabolic diseases to neurodegenerative and neurological disorders. She received her PhD in Molecular Genetics with an emphasis on Bioinformatics from Georgia State University and obtained postdoctoral training in Systems Genetics at UCLA under the guidance of Dr. A. Jake Lusis. She subsequently worked as Senior Scientist at Rosetta Inpharmatics/Merck & Co. and Director of Systems Biology at Sage Bionetworks before returning to UCLA as a faculty member."

                /> 

                <Card 
                    name = "Isaac Cervantes Sandoval"
                    imgURL = {sandoval}
                    position = "Assistant Professor at Georgetown"
                    des = "I received my MSc and Ph.D. in Chemical and Biological Sciences from the National School for Biological Sciences of the National Polytechnic Institute in Mexico City, Mexico. During my graduate work, I focused on the physiopathology and host immune response in free-living amoebae infections, using both in vivo and in vitro approaches. These studies included the characterization of proteases of Acanthamoeba spp and Naegleria spp as possible virulence mechanisms. In addition, we also studied the role of inflammation in the amoebic meningoencephalitis using CD38-/- knockout mice and the importance of mucins in the innate resistance to Naegleria infections.

Upon the completion of my Ph.D., I decided to move into the more challenging field of Neuroscience. I joined the Neuroscience Department at The Scripps Research Institute in 2009 to expand my technical skills and neuroscience knowledge. There, my research has focused on understanding how memories are encoded, consolidated, retrieved, and, most recently, how these are forgotten. For this, I use the fruit fly as an animal model. One of our significant findings is that normal forgetting is an active, well-regulated process that involves dopaminergic signals, which depend on the behavioral state of the animal. 

In 2019 I moved as an Assistant Professor at Georgetown University, where I will continue to develop a research program to understand how memories are encoded in the brain and how they are forgotten.
"
                /> 
                <Card
                    name = "Ken Birman"
                    imgURL = {birman}
                    position = "N. Rama Rao Professor of Computer Science at Cornell"
                    des = "Ken Birman is the N. Rama Rao Professor of Computer Science at Cornell. An ACM Fellow and the winner of the IEEE Tsutomu Kanai Award, Ken has written 3 textbooks and published more than 150 papers in prestigious journals and conferences. Software he developed operated the New York Stock Exchange for more than a decade without trading disruptions, and plays central roles in the French Air Traffic Control System and the US Navy AEGIS warship. Other technologies from his group found their way into IBM’s Websphere product, Amazon’s EC2 and S3 systems, Microsoft’s cluster management solutions, and the US Northeast bulk power grid. His new Derecho and Cascade systems are intended for demanding settings such as the smart power grid, smart highways and homes, and scalable vision applications. Both can be downloaded from GitHub.com/Derecho-Project."
                
                /> 

                <Card 
                    name = "Nitu Kitchloo"
                    imgURL = {kitchloo}
                    position = "Professor and Chair of Mathematics at Johns Hopkins University"
                    des = "Nitu Kitchloo is a professor in the Department of Mathematics at Johns Hopkins. In the early part of Professor Kitchloo's career, he was an assistant professor at Johns Hopkins before moving to the University of California, San Diego as an associate professor in 2004. In 2010, he returned to Johns Hopkins as a professor."
                /> 


            </div>
        </div>
    </div>
    )
}
// imgURL name des