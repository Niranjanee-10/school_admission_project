import java.sql.*;
import java.util.*;
import java.sql.Date;

abstract class Student {
    int id;
    String name;

    public Student(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public abstract void insertDetails(Connection con) throws SQLException;
    public abstract void displayDetails();
    public abstract void updateDetails(Connection con) throws SQLException;
}

class OfficialStudent extends Student {
    Date dob;
    String email;
    String dept;
    long phoneNumber;

    public OfficialStudent(int id, String name, Date dob, String email, String dept, long phoneNumber) {
        super(id, name);
        this.dob = dob;
        this.email = email;
        this.dept = dept;
        this.phoneNumber = phoneNumber;
    }

    @Override
    public void insertDetails(Connection con) throws SQLException {
        String query = "INSERT INTO stud_offi VALUES(?,?,?,?,?,?)";
        PreparedStatement st = con.prepareStatement(query);
        st.setInt(1, id);
        st.setString(2, name);
        st.setDate(3, dob);
        st.setString(4, email);
        st.setString(5, dept);
        st.setLong(6, phoneNumber);
        st.execute();
    }

    @Override
    public void displayDetails() {
        System.out.println("Student Id : " + id);
        System.out.println("Student Name : " + name);
        System.out.println("Student DOB : " + dob);
        System.out.println("Student Email : " + email);
        System.out.println("Student Department : " + dept);
        System.out.println("Student Phone Number : " + phoneNumber);
    }

    @Override
    public void updateDetails(Connection con) throws SQLException {
        String query = "UPDATE stud_offi SET stud_name=?, dob=?, email=?, dept_name=?, phone_num=? WHERE id=?";
        PreparedStatement st = con.prepareStatement(query);
        st.setString(1, name);
        st.setDate(2, dob);
        st.setString(3, email);
        st.setString(4, dept);
        st.setLong(5, phoneNumber);
        st.setInt(6, id);
        st.executeUpdate();
    }
}

class PersonalStudent extends Student {
    String parentName;
    long parentPhoneNumber;
    String board;
    int twelfthMark;
    String bloodGroup;

    public PersonalStudent(int id, String name, String parentName, long parentPhoneNumber, String board, int twelfthMark, String bloodGroup) {
        super(id, name);
        this.parentName = parentName;
        this.parentPhoneNumber = parentPhoneNumber;
        this.board = board;
        this.twelfthMark = twelfthMark;
        this.bloodGroup = bloodGroup;
    }

    @Override
    public void insertDetails(Connection con) throws SQLException {
        String query = "INSERT INTO stud_per VALUES(?,?,?,?,?,?,?)";
        PreparedStatement st = con.prepareStatement(query);
      
        st.setString(1, name);
        st.setString(2, parentName);
        st.setLong(3, parentPhoneNumber);
        st.setString(4, board);
        st.setInt(5, twelfthMark);
        st.setString(6, bloodGroup);
        st.setInt(7, id);
        st.execute();
    }

    @Override
    public void displayDetails() {
        System.out.println("Student Name : " + name);
        System.out.println("Student Parent's Name : " + parentName);
        System.out.println("Parent's Phone Number : " + parentPhoneNumber);
        System.out.println("Student 12th Board : " + board);
        System.out.println("Student 12th mark : " + twelfthMark);
        System.out.println("Student Blood Group : " + bloodGroup);
    }

    @Override
    public void updateDetails(Connection con) throws SQLException {
        String query = "UPDATE stud_per SET parent_name=?, parent_num=?, school_board=?, mark=?, blood_group=?,stud_id=? WHERE stu_name=?";
        PreparedStatement st = con.prepareStatement(query);
        //st.setString(1, name);
        st.setString(1, parentName);
        st.setLong(2, parentPhoneNumber);
        st.setString(3, board);
        st.setInt(4, twelfthMark);
        st.setString(5, bloodGroup);
        st.setInt(6, id);
        st.setString(7, name);
        st.executeUpdate();
    }
}

public class Stud_Details {
    public static void main(String[] args) throws Exception {
        String url = "jdbc:mysql://localhost/student_info";
        String user = "root";
        String pass = "tiger";
        Connection con = DriverManager.getConnection(url, user, pass);
        Scanner sc = new Scanner(System.in);
        System.out.println("CHOOSE THE TABLE :");
        System.out.println("1 => STUDENT OFFICIAL DETAILS");
        System.out.println("2 => STUDENT PERSONAL DETAILS");

        int choice = sc.nextInt();
        if (choice == 1) {
            // Official Student Details
            System.out.println("OFFICIAL DETAILS:");
            System.out.println("Choose an option:");
            System.out.println("1 => ADD DETAILS");
            System.out.println("2 => DISPLAY DETAILS");
            System.out.println("3 => UPDATE DETAILS");
            System.out.println("4 => DELETE DETAILS");
            int op = sc.nextInt();

            switch (op) {
                case 1:
                    System.out.println("Enter the id:");
                    int id = sc.nextInt();
                    System.out.println("Enter the name:");
                    String name = sc.next();
                    System.out.println("Enter the DOB(YYYY-MM-DD):");
                    String date = sc.next();
                    Date dob = Date.valueOf(date);
                    System.out.println("Enter the email:");
                    String email = sc.next();
                    System.out.println("Enter the dept:");
                    String dept = sc.next();
                    System.out.println("Enter the phone number:");
                    long num = sc.nextLong();

                    OfficialStudent officialStudent = new OfficialStudent(id, name, dob, email, dept, num);
                    officialStudent.insertDetails(con);

                    System.out.println("DATA ADDED!");
                    break;

                case 2:
                    System.out.println("Enter the id you want to be displayed:");
                    int displayId = sc.nextInt();

                    String queryDisplay = "SELECT * FROM stud_offi WHERE id=?";
                    PreparedStatement stDisplay = con.prepareStatement(queryDisplay);
                    stDisplay.setInt(1, displayId);
                    ResultSet rsDisplay = stDisplay.executeQuery();

                    if (rsDisplay.next()) {
                        OfficialStudent officialStud = new OfficialStudent(
                                rsDisplay.getInt("id"),
                                rsDisplay.getString("stud_name"),
                                rsDisplay.getDate("dob"),
                                rsDisplay.getString("email"),
                                rsDisplay.getString("dept_name"),
                                rsDisplay.getLong("phone_num")
                        );
                        officialStud.displayDetails();
                    } else {
                        System.out.println("No student found with the given ID.");
                    }
                    rsDisplay.close();
                    stDisplay.close();
                    break;

                case 3:
                    System.out.println("Enter the id where you want to update the details:");
                    int updateId = sc.nextInt();

                    String querySelect = "SELECT * FROM stud_offi WHERE id=?";
                    PreparedStatement stSelect = con.prepareStatement(querySelect,
                            ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
                    stSelect.setInt(1, updateId);
                    ResultSet rs = stSelect.executeQuery();

                    if (rs.next()) {
                        OfficialStudent officialStud = new OfficialStudent(
                                rs.getInt("id"),
                                rs.getString("stud_name"),
                                rs.getDate("dob"),
                                rs.getString("email"),
                                rs.getString("dept_name"),
                                rs.getLong("phone_num")
                        );

                        System.out.println("CURRENT DETAILS:");
                        officialStud.displayDetails();

                        System.out.println("Enter the new name (or enter '-' to keep the current value):");
                        String newName = sc.next();
                        if (!newName.equals("-")) {
                            officialStud.name = newName;
                        }

                        System.out.println("Enter the new DOB (YYYY-MM-DD) (or enter '-' to keep the current value):");
                        String newDOB = sc.next();
                        if (!newDOB.equals("-")) {
                            Date newDate = Date.valueOf(newDOB);
                            officialStud.dob = newDate;
                        }

                        System.out.println("Enter the new email (or enter '-' to keep the current value):");
                        String newEmail = sc.next();
                        if (!newEmail.equals("-")) {
                            officialStud.email = newEmail;
                        }

                        System.out.println("Enter the new department (or enter '-' to keep the current value):");
                        String newDept = sc.next();
                        if (!newDept.equals("-")) {
                            officialStud.dept = newDept;
                        }

                        System.out.println("Enter the new phone number (or enter -1 to keep the current value):");
                        long newNum = sc.nextLong();
                        if (newNum != -1) {
                            officialStud.phoneNumber = newNum;
                        }

                        officialStud.updateDetails(con);
                        System.out.println("DATA UPDATED!");
                    } else {
                        System.out.println("Invalid ID. No records found for the given ID.");
                    }
                    rs.close();
                    stSelect.close();
                    break;

                case 4:
                    System.out.println("Enter the id you want to delete:");
                    int deleteId = sc.nextInt();

                    String queryDelete = "DELETE FROM stud_offi WHERE id=?";
                    PreparedStatement stDelete = con.prepareStatement(queryDelete);
                    stDelete.setInt(1, deleteId);
                    int rowsAffected = stDelete.executeUpdate();

                    if (rowsAffected > 0) {
                        System.out.println("DATA DELETED!");
                    } else {
                        System.out.println("No student found with the given ID.");
                    }
                    stDelete.close();
                    break;

                default:
                    System.out.println("INVALID OPTION!");
            }
        } else if (choice == 2) {
            // Personal Student Details
            System.out.println("PERSONAL DETAILS:");
            System.out.println("Choose an option:");
            System.out.println("1 => ADD DETAILS");
            System.out.println("2 => DISPLAY DETAILS");
            System.out.println("3 => UPDATE DETAILS");
            System.out.println("4 => DELETE DETAILS");
            int op = sc.nextInt();

            switch (op) {
                case 1:
                    
                    System.out.println("Enter the name:");
                    String name = sc.next();
                    System.out.println("Enter the parent's name:");
                    String p_name = sc.next();
                    System.out.println("Enter the parent's phone number:");
                    long p_num = sc.nextLong();

                    // Validate and ensure the board is not empty
                    String board;
                    do {
                        System.out.println("Enter the school board:");
                        board = sc.next();
                    } while (board.isEmpty());

                    // Validate and ensure the 12th mark is an integer
                    int mark = 0;
                    boolean validMark = false;
                    do {
                        System.out.println("Enter the 12th mark (should be an integer):");
                        try {
                            mark = Integer.parseInt(sc.next());
                            validMark = true;
                        } catch (NumberFormatException e) {
                            System.out.println("Invalid input. Please enter an integer for the 12th mark.");
                        }
                    } while (!validMark);

                    System.out.println("Enter the blood group:");
                    String bg = sc.next();
                    System.out.println("Enter the id:");
                    int id = sc.nextInt();

                    PersonalStudent personalStudent = new PersonalStudent(id, name, p_name, p_num, board, mark, bg);
                    personalStudent.insertDetails(con);
                    System.out.println(" DATA ADDED");
                    break;

                case 2:
                    System.out.println("Enter the name you want to be displayed:");
                    String stu_name = sc.next();

                    String queryDisplay = "SELECT * FROM stud_per WHERE stu_name=?";
                    PreparedStatement stDisplay = con.prepareStatement(queryDisplay);
                    stDisplay.setString(1, stu_name);
                    ResultSet rsDisplay = stDisplay.executeQuery();

                    if (rsDisplay.next()) {
                        PersonalStudent personalStud = new PersonalStudent(
                                rsDisplay.getInt("stud_id"),
                                rsDisplay.getString("stu_name"),
                                rsDisplay.getString("parent_name"),
                                rsDisplay.getLong("parent_num"),
                                rsDisplay.getString("school_board"),
                                rsDisplay.getInt("mark"),
                                rsDisplay.getString("blood_group")
                        );
                        personalStud.displayDetails();
                    } else {
                        System.out.println("No student found with the given name.");
                    }
                    rsDisplay.close();
                    stDisplay.close();
                    break;

                case 3:
                    System.out.println("Enter the name where you want to update the details:");
                    String update_name = sc.next();

                    String querySelect = "SELECT * FROM stud_per WHERE stu_name=?";
                    PreparedStatement stSelect = con.prepareStatement(querySelect,
                            ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
                    stSelect.setString(1, update_name);
                    ResultSet rs = stSelect.executeQuery();

                    if (rs.next()) {
                        PersonalStudent personalStud = new PersonalStudent(
                                rs.getInt("stud_id"),
                                rs.getString("stu_name"),
                                rs.getString("parent_name"),
                                rs.getLong("parent_num"),
                                rs.getString("school_board"),
                                rs.getInt("mark"),
                                rs.getString("blood_group")
                        );

                        System.out.println("CURRENT DETAILS:");
                        personalStud.displayDetails();

                        

                        System.out.println("Enter the new parent's name (or enter '-' to keep the current value):");
                        String newPName = sc.next();
                        if (!newPName.equals("-")) {
                            personalStud.parentName = newPName;
                        }

                        System.out.println("Enter the new parent's phone number (or enter -1 to keep the current value):");
                        long newPNum = sc.nextLong();
                        if (newPNum != -1) {
                            personalStud.parentPhoneNumber = newPNum;
                        }

                        System.out.println("Enter the new school board (or enter '-' to keep the current value):");
                        String newBoard = sc.next();
                        if (!newBoard.equals("-")) {
                            personalStud.board = newBoard;
                        }

                        System.out.println("Enter the new 12th mark (or enter -1 to keep the current value):");
                        int newMark = sc.nextInt();
                        if (newMark != -1) {
                            personalStud.twelfthMark = newMark;
                        }

                        System.out.println("Enter the new blood group (or enter '-' to keep the current value):");
                        String newBG = sc.next();
                        if (!newBG.equals("-")) {
                            personalStud.bloodGroup = newBG;
                        }
                        System.out.println("Enter the new id (or enter -1 to keep the current value):");
                        int newId = sc.nextInt();
                        if (newId != -1) {
                            personalStud.id= newId;
                        }
                      
                        

                        personalStud.updateDetails(con);
                        System.out.println("DATA UPDATED!");
                    } else {
                        System.out.println("Invalid Name. No records found for the given name.");
                    }
                    rs.close();
                    stSelect.close();
                    break;

                case 4:
                    System.out.println("Enter the name you want to delete:");
                    String delete_name = sc.next();

                    String queryDelete = "DELETE FROM stud_per WHERE stu_name=?";
                    PreparedStatement stDelete = con.prepareStatement(queryDelete);
                    stDelete.setString(1, delete_name);
                    int rowsAffected = stDelete.executeUpdate();

                    if (rowsAffected > 0) {
                        System.out.println("DATA DELETED!");
                    } else {
                        System.out.println("No student found with the given name.");
                    }
                    stDelete.close();
                    break;

                default:
                    System.out.println("INVALID OPTION!");
            }
        } else {
            System.out.println("INVALID");
        }

        sc.close();
        con.close();
    }
}
