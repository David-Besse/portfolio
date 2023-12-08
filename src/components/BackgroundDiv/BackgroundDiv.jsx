import styled from "styled-components";
import PropTypes from "prop-types";

const BackgroundDivStyled = styled.div`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  clip-path: polygon(${(props) => props.$path});
  background-color: ${(props) => props.$color};
`;

/**
 * Generate a background div component.
 *
 * @param {string} path - The path of the background image.
 * @param {string} color - The color of the background.
 * @param {string} width - The width of the background div.
 * @param {string} height - The height of the background div.
 * @return {JSX.Element} The generated background div component.
 */
const BackgroundDiv = ({
  path = "0% 0%, 0% 100%, 100% 100%, 100% 0%",
  color = "pink",
  width = "100px",
  height = "100px",
}) => {
  return (
    <BackgroundDivStyled
      className="absolute top-0 left-0 z-0 opacity-40"
      $path={path}
      $color={color}
      $width={width}
      $height={height}
    />
  );
};

BackgroundDiv.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  path: PropTypes.string,
  width: PropTypes.string,
};

export default BackgroundDiv;
