const AvatarJsx = (params) => {
    const src = `https://randomuser.me/api/portraits/lego/7.jpg`

    return (
        <picture>
            <img src={src} alt='Eve' />
            Eve
        </picture>
    )
}

export default AvatarJsx