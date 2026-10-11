import type { ResearchPublication } from "@/data/research";
import { researchDetails } from "@/data/research-details";
import Disclosure from "../Disclosure";
import CopyCitation from "../CopyCitation";
import MethodWalkthrough from "./MethodWalkthrough";
import UnitsDigitExample from "./UnitsDigitExample";

export default function PublicationDetails({ publication }: { publication: ResearchPublication }) {
  const detail = researchDetails[publication.shortTitle];
  if (!detail) return null;
  return <div className="publication-details">
    <CopyCitation citation={detail.citation} title={publication.shortTitle} />
    <Disclosure label="Abstract"><p className="publication-abstract">{detail.abstract}</p></Disclosure>
    {publication.shortTitle === "BODE-GEN" && <Disclosure label="Explore the method">
      <MethodWalkthrough />
      <div className="research-example">
        <h4>A task the tests can check</h4>
        <p>HumanEval+ task 97 asks for the product of two integers’ units digits. For 14 and −15, those digits are 4 and 5, so the answer is 20. Change the inputs to try the rule.</p>
        <UnitsDigitExample />
        <p className="research-source">Hand-written JavaScript illustration of the task in <a href="https://arxiv.org/html/2512.15076v1#S4.F8" target="_blank" rel="noopener noreferrer">Figure 8</a>. This runs in your browser; it is not an LLM response or a BODE-GEN experiment.</p>
      </div>
    </Disclosure>}
  </div>;
}
