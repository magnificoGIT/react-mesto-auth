import logoMesto from "../images/header_logo_mesto.svg";

export default function Header() {
  return (
    <header className="header">
      <img
        src={logoMesto}
        alt="Чёрно-белый логотип, на котором написанно Mesto и меньшим шрифтом Russia"
        className="header__logo"
      />
    </header>
  );
}
