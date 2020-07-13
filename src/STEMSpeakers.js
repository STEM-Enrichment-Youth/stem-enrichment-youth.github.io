import React from "react";
import Card from "./NewTeam/TeamCard";

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
                    position="Stanford Professor"
                />
                <Card
                    name="Dr. Xia Yang"
                    imgURL="data:image/jpeg;base64,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"
                    des="
                    Dr. Xia Yang received her Ph.D. in Molecular Genetics and Bioinformatics from Georgia State University and had postdoctoral training in Systems Genetics at UCLA. She was Senior Research Scientist at Rosetta Inpharmatics/Merck & Co. and Director of Systems Biology at Sage Bionetworks prior to returning to UCLA as a faculty member.

"
                    position="UCLA Professor"
                />
                <Card
                    name="Dr. Jane Frommer"
                    imgURL="data:image/jpeg;base64,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"
                    des="
                    Jane Frommer, science adviser at Collabra, is the recipient of the 2020 Perkin Medal, given annually by the Society of Chemical Industry, America Group (SCI America) in honor of outstanding work in applied chemistry in the US. Frommer is being recognized for her contributions to electronically conducting polymers and scanning probe instrumentation.
"
                    position="Receiver of the Perkins Medal"
                />
                <Card 
                    name="Jamie Spangler"
                    imgURL="https://mail.google.com/mail/u/0?ui=2&ik=d486e5f417&attid=0.0.1&permmsgid=msg-f:1672068865225360093&th=173461c61fbf82dd&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_lizx6gF3QVhJqwGFUZQHJm4JMVIDpe_UBKBjnrgjwB0ypNt14DrQSrzBz9pf-Mit7wo4k-ahh8eiKW4gWtYGpUDYiduzOwzjrUYv1bKwsdmuoybm7OnBTYR8&disp=emb&realattid=ii_kcjx2on91"
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
                    position="JHU Biomedical Engineering"
                /> 

            </div>
        </div>
    </div>
    )
}
// imgURL name des