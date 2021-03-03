import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

function LH(props) {
  return (
    <Svg
      viewBox="0 0 141.83136 31.94079"
     
      {...props}
    >
      <Defs>
        <ClipPath id="a" clipPathUnits="userSpaceOnUse">
          <Path
            d="M25.923515 126.05109H168.060035V157.99188H25.923515z"
            fill={props.fill}
            fillOpacity={1}
            stroke="none"
            strokeWidth={0.26458332}
            strokeOpacity={1}
          />
        </ClipPath>
      </Defs>
      <G
        clipPath="url(#a)"
        transform="translate(-34.918 -104.137) translate(8.689 -21.914)"
        fill={props.fill}
      >
        <Path
          d="M74.21 180.997c-9.117-.66-16.488-1.475-24.557-2.715-6.627-1.019-7.411-1.252-7.636-2.275-.365-1.66-1.882-14.005-1.882-15.317v-1.116H99.43c57.458 0 59.297.031 59.297.999 0 1.347-1.677 15.866-1.854 16.052-.896.94-20.896 3.538-33.78 4.388-9.678.638-39.987.628-48.884-.017zm-36.123-24.791c-.313-.377-.953-4.18-1.422-8.452a3796.8 3796.8 0 00-1.373-12.328c-.286-2.508-.521-5.225-.522-6.037l-.002-1.475H164.247l-.32 3.085c-.175 1.697-.713 7.654-1.195 13.237-.601 6.955-1.135 10.545-1.697 11.403l-.82 1.252h-60.78c-48.668 0-60.892-.137-61.348-.685zm-6.46-32.988c-.873-.735-1.351-2.374-2.206-7.554-.6-3.639-1.092-6.72-1.092-6.849 0-.128 31.875-.215 70.834-.194 66.14.036 70.833.099 70.822.946-.006.498-.449 3.628-.984 6.954-.735 4.565-1.225 6.237-2.001 6.824-.885.67-10.313.78-67.643.795-62.676.017-66.682-.038-67.73-.922zm-5.393-20.966c.47-.2 2.208-1.831 3.86-3.624l3.006-3.26 4.993-.924a77327.29 77327.29 0 0035.014-6.482l16.069-2.978h10.84c8.567 0 12.006.223 16.397 1.06l18.435 3.52c11.074 2.115 22.982 4.342 29.076 5.438 1.198.215 2.48 1.195 4.293 3.28 1.422 1.636 2.904 3.297 3.294 3.692.592.6-11.387.712-72.712.68-40.382-.02-73.036-.2-72.565-.402z"
          fill={props.fill}
          strokeWidth={0.53661984}
        />
      </G>
    </Svg>
  )
}

export default LH
