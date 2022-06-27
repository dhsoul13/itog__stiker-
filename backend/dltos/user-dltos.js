const UserDto = (datas) => {
    return {
        email: datas.email,
        name: datas.name,
        isAdmin: datas.isAdmin,
        isActivated: datas.isActivated,
        id: datas._id,
    }
}

export default UserDto;