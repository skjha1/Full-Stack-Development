'use strict'

const add_btn = document.querySelector("#add-btn");
const edit_btn = document.querySelector('#edit-btn');
const delete_btn = document.querySelector('#delete-btn');
const overlay = document.querySelector('.overlay');
const edit_form = document.querySelector('.edit-form');
const delete_form = document.querySelector('.delete-form');
const add_form = document.querySelector('.add-form');


add_btn.addEventListener('click', function ()
{
    add_form.classList.remove("hidden");
    overlay.classList.remove("hidden");

    document.querySelector('#add-cancel').addEventListener("click", function ()
    {
        add_form.classList.add("hidden");
        overlay.classList.add("hidden");
    })
    document.querySelector('#add-cross').addEventListener("click", function ()
    {
        add_form.classList.add("hidden");
        overlay.classList.add("hidden");
    })

})

delete_btn.addEventListener("click", function ()
{
    delete_form.classList.remove("hidden");
    overlay.classList.remove("hidden");

    document.querySelector('#delete-cancel').addEventListener("click", function ()
    {
        delete_form.classList.add("hidden");
        overlay.classList.add("hidden");
    })
    document.querySelector('#delete-cross').addEventListener("click", function ()
    {
        delete_form.classList.add("hidden");
        overlay.classList.add("hidden");
    })
})

// edit button functionality

edit_btn.addEventListener("click", function ()
{
    edit_form.classList.remove("hidden");
    overlay.classList.remove("hidden");

    document.querySelector('#edit-cancel').addEventListener("click", function ()
    {
        edit_form.classList.add("hidden");
        overlay.classList.add("hidden");
    });

    document.querySelector('#edit-cross').addEventListener("click", function ()
    {
        edit_form.classList.add("hidden");
        overlay.classList.add("hidden");
    });
});









