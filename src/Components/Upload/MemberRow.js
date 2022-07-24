import React from 'react'

function MemberRow({i,obj}) {
    return (
        <div className="member">
            <p>Member {i+1}</p>
            <section>
                <label>Name :</label>
                <input type="text" className="name" placeholder="eg.John" required></input>
                <label style={{ textAlign: "center" }}>USN :</label>
                <input type="text" className="usn" placeholder="eg.1DS19CS001" required></input>
            </section>
        </div>
    )
}

export default MemberRow