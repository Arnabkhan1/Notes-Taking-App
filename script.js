const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

addBtn.addEventListener("click", addNote);

function addNote() {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="tool">
        <i class="save fas fa-save"></i>
        <i class="trash fas fa-trash"></i>
     </div>
     <textarea></textarea>
    `;
     
    const save = note.querySelector(".save");
    const trash = note.querySelector(".trash");
    const textarea = note.querySelector("textarea");

    save.addEventListener("click",saveNotes);
    textarea.addEventListener("input",saveNotes);
    trash.addEventListener("click",()=>{
        note.remove();
        saveNotes();
    });



    main.appendChild(note);
}

function saveNotes() {
    const notes = document.querySelectorAll(".note textarea");
    const data = Array.from(notes).map(note => note.value);
    console.log(notes,data);

    if(data.length === 0) {
        localStorage.removeItem("notes");
    }else {
        localStorage.setItem("notes", JSON.stringify(data));

    }

    
}

function loadNodes() {
    const lsNotes = JSON.parse(localStorage.getItem("notes"));

    if(lsNotes !== null) {
        lsNotes.forEach(noteText => {
            addNote();

            const notes = document.querySelectorAll(".note textarea");
            const lastNote = notes[notes.length -1];
            lastNote.value = noteText;
       
        });
    }
}

loadNodes();

// This code creates a simple **Notes App**. You can use it to add, save, delete notes, and the notes stay on the page even after you refresh it. Let me explain it step by step in an easy way:

// ---

// ### **1. What Happens When You Click the "Add" Button?**

// 1. The button with `id="addBtn"` listens for clicks. When you click it, it runs a function called `addNote`.

// 2. Inside the `addNote` function:
//    - A new `div` (a box) is created to hold your note.
//    - The box has a **toolbar** with:
//      - A **Save button** 🖫 (icon with a floppy disk).
//      - A **Trash button** 🗑️ (icon with a trash can).
//    - There’s also a **textarea** where you can type your note.

// 3. Event Listeners are added to:
//    - **Save button**: Calls the `saveNotes` function to save all notes.
//    - **Textarea**: Saves your note as you type.
//    - **Trash button**: Deletes the note and updates the saved notes.

// 4. The new note is added to the `main` area on the webpage using `main.appendChild(note)`.

// ---

// ### **2. How Are Notes Saved?**

// - **When You Save or Type**:
//   - The `saveNotes` function collects all the text from every note on the page.
//   - It saves the text into `localStorage`, which is like a small storage space in your browser.

// - **What is `localStorage`?**
//   - It’s a way to store data on your browser so it doesn’t disappear when you reload the page.
//   - Here, the notes are saved as a single string in JSON format (basically, a text format).

// ---

// ### **3. How Are Notes Loaded?**

// - When the page loads (at the bottom, the function `loadNodes` is called):
//   1. It checks `localStorage` for saved notes.
//   2. If there are saved notes, it reads them and creates notes for each saved item using `addNote`.
//   3. Each note's text area is filled with the text from the saved notes.

// ---

// ### **4. How Does the "Trash" Button Work?**

// - When you click the Trash button:
//   - The note is removed from the page using `note.remove()`.
//   - The `saveNotes` function is called to update the saved notes in `localStorage`.

// ---

// ### **5. How to Think About It?**

// - The app has **three main parts**:
//   1. **Adding Notes**: Makes a new note and puts it on the screen.
//   2. **Saving Notes**: Stores all your notes in the browser's storage.
//   3. **Loading Notes**: Fetches and shows your saved notes when you reload the page.

// ---

// ### **How It All Fits Together**

// 1. **Add a Note** ➡️ A new note appears on the screen.
// 2. **Type Something** ➡️ It's automatically saved.
// 3. **Delete a Note** ➡️ It's removed from the screen and storage.
// 4. **Reload the Page** ➡️ Your saved notes come back automatically.

// ---

// It’s like a **sticky note app**, but for your browser! 😊