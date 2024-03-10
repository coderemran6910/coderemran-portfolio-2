
const Links = () => {
    const items = [
        "Home",
        "Services",
        "Portfolio",
        "Blog",
        "Contact",
        "About",
    ]
    return (
        <div className="links">
            {
                items.map((item, index) => <a href={`#${item}`} key={item}>{item}</a>)
            }
        </div>
    );
};

export default Links;