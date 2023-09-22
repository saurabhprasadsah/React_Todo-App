import React from 'react'



export default function Input() {
    return (
        <form className="row g-3">
            <div className="col-10">
                <input type="text" className="form-control" placeholder="Enter Todo" />
            </div>
            <div className="col-2">
                <button type="submit" className="btn btn-primary mb-3">Add</button>
            </div>
        </form>
    )
}
