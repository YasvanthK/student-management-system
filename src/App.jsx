import './App.css'

function Header() {
  return (
    <header>
      <h1>Student Management System</h1>
    </header>
  )
}

function StudentProfile({ name, department, year }) {
  return (
    <div className="student-profile">
      <h2>{name}</h2>
      <p>Department: {department}</p>
      <p>Year: {year}</p>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <p>© 2026 Student Management System</p>
    </footer>
  )
}

function App() {
  const student1Name = "Anu"
  const student1Department = "CSE"
  const student1Year = "3rd Year"

  const student2Name = "Bala"
  const student2Department = "Computer Science"
  const student2Year = "3rd Year"

  return (
    <div>
      <Header />

      <main>
        <h2>Student 1</h2>
        <StudentProfile
          name={student1Name}
          department={student1Department}
          year={student1Year}
        />

        <h2>Student 2</h2>
        <StudentProfile
          name={student2Name}
          department={student2Department}
          year={student2Year}
        />
      </main>

      <Footer />
    </div>
  )
}

export default App