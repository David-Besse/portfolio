import * as THREE from "three";
import PropTypes from "prop-types";
import { useMemo } from "react";
import SkillsWord from "../SkillsWord/SkillsWord";

import SkillsList from "./../../../datas/SkillsList";

/**
 * Generates a count x count array of random words with spherical distribution.
 *
 * @param {number} count - The number of words in each row and column of the array. Default is 4.
 * @param {number} radius - The radius of the sphere. Default is 20.
 * @return {JSX.Element} A group of SkillsWord components representing the words in the spherical array.
 */
const CloudSphere = ({ count = 4, radius = 20 }) => {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    let SkillsListIndex = 0;

    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        if (SkillsListIndex >= SkillsList.length) {
          // If we've reached the end of SkillsList, reset the index to 0
          SkillsListIndex = 0;
        }
        const spherical = new THREE.Spherical(
          radius,
          phiSpan * i,
          thetaSpan * j
        );
        const position = new THREE.Vector3().setFromSpherical(spherical);
        // Assign a word from SkillsList
        temp.push({
          position,
          word: SkillsList[SkillsListIndex],
        });
        SkillsListIndex++;
      }
    }

    return temp;
  }, [count, radius]);

  return (
    <group>
      {words.map((el, index) => (
        <SkillsWord key={index} position={el.position} word={el.word} />
      ))}
    </group>
  );
};

CloudSphere.propTypes = {
  count: PropTypes.number,
  radius: PropTypes.number,
};

export default CloudSphere;
