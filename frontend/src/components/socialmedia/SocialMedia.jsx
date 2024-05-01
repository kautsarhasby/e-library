import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandTiktok,
  TbBrandTwitter,
} from "react-icons/tb";
import PropTypes from "prop-types";

export const SocialMedia = (props) => {
  const { color, size } = props;
  const logo = [
    {
      logo: TbBrandFacebook,
      link: "https://facebook.com",
    },
    {
      logo: TbBrandInstagram,
      link: "https://instagram.com",
    },
    {
      logo: TbBrandTiktok,
      link: "https://tiktok.com",
    },
    {
      logo: TbBrandTwitter,
      link: "https://twitter.com",
    },
  ];
  return (
    <ul className="flex gap-2 justify-center">
      {logo.map((item, key) => {
        return (
          <li key={key}>
            <a href={item.link} target="_blank">
              <item.logo color={color} size={size} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
SocialMedia.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};
