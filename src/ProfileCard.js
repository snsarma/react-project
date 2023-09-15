function ProfileCard({title , handle,image}) {
    //const {title , handle} = props;
    return (
        <div>
            <h1>
                <img src ={image}/>
                Title : {title}
                Value : {handle}
            </h1>
        </div>

    );
}

export default ProfileCard;