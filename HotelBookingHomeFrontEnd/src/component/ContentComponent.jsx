import React from 'react'

export default function ContentComponent() {
  return (
    <div>
       <div class="container">
                <br/><br/>
                <div class="add-roomFlex">
                    <div class="add-roomCol3">
                        <div class="">
                            <form action="" >
                                <div class="add-roomCol3">
                                    <label class="">Name</label>
                                    <input type="text" class="add-roomInput" id="inputName" placeholder="name"/>
                                </div>
                                <div class="add-roomCol3">
                                    <label for="inputEmail">Email</label>
                                    <input type="email" class="add-roomInput" placeholder='email' id="inputEmail" />
                                </div>
                                <div class="add-roomCol3">
                                    <label for="area" class="form-label text-white mt-3">Leave Something</label>
                                    <textarea class="add-roomInput" placeholder="Leave your query here"></textarea>
                                </div>
                                <div class="add-roomCol3">
                                    <button type="submit" class="btnBooking">Send Email</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='add-roomCol3' style={{marginLeft: 150}}>
                        <div>
                            <img width={750} style={{borderRadius: 20}} src="/image/Screenshot 2024-09-22 210237.png" />
                        </div>
                    </div>
                </div>
             </div>
    </div>
  )
}
