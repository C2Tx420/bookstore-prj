use std::io::{self, Write, stdout, stdin};
use postgrest::Postgrest;

#[derive(Debug)]
struct Book {
    title: String,
    author: String,
    description: String,
}

impl Into<String> for Book {
    fn into(self) -> String {
        serde_json::to_string(&self).unwrap_or_else(|e| {
            eprintln!("Error converting Book to String: {}", e);
            String::new()
        })
    }
}

async fn list_books() -> Result<(), Box<dyn std::error::Error>> {
    let client = Postgrest::new("https://kwaorndluoqqnsbgpdkz.supabase.co/rest/v1").insert_header("apikey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3YW9ybmRsdW9xcW5zYmdwZGt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwMDI2ODYsImV4cCI6MjAxNzU3ODY4Nn0.CS_2WCh6nQm3nZOwbp5kRzi_pV_v6g4kQJjsgPd0QFA");
    let resp = client.from("books").select("*").execute().await?;
    println!("{}", resp.text().await?);
    Ok(())
}

// async fn add_book() -> Result<(), Box<dyn std::error::Error>> {
//     let mut title=String::new();
//     print!("Please enter title: ");
//     let _=stdout().flush();
//     stdin().read_line(&mut title).expect("Did not enter a correct string");
//     if let Some('\n')=title.chars().next_back() {
//         title.pop();
//     }
//     if let Some('\r')=title.chars().next_back() {
//         title.pop();
//     }

//     let mut author=String::new();
//     print!("Please enter author: ");
//     let _=stdout().flush();
//     stdin().read_line(&mut author).expect("Did not enter a correct string");
//     if let Some('\n')=author.chars().next_back() {
//         author.pop();
//     }
//     if let Some('\r')=author.chars().next_back() {
//         author.pop();
//     }

//     let mut description=String::new();
//     print!("Please enter description: ");
//     let _=stdout().flush();
//     stdin().read_line(&mut description).expect("Did not enter a correct string");
//     if let Some('\n')=description.chars().next_back() {
//         description.pop();
//     }
//     if let Some('\r')=description.chars().next_back() {
//         description.pop();
//     }

//     let client = Postgrest::new("https://kwaorndluoqqnsbgpdkz.supabase.co/rest/v1").insert_header("apikey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3YW9ybmRsdW9xcW5zYmdwZGt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwMDI2ODYsImV4cCI6MjAxNzU3ODY4Nn0.CS_2WCh6nQm3nZOwbp5kRzi_pV_v6g4kQJjsgPd0QFA");

//     let book = Book {
//         title: title.to_string(),
//         author: author.to_string(),
//         description: description.to_string(),
//     };

//     print!("{}", string);
    
//     let resp = client
//     .from("books")
//     .insert(book)
//     .execute()
//     .await?;

//     // println!("{}", resp.text().await?);
//     Ok(())
// }


async fn search_book() -> Result<(), Box<dyn std::error::Error>> {
    let mut s=String::new();
    print!("Please enter title or author ");
    let _=stdout().flush();
    stdin().read_line(&mut s).expect("Did not enter a correct string");
    if let Some('\n')=s.chars().next_back() {
        s.pop();
    }
    if let Some('\r')=s.chars().next_back() {
        s.pop();
    }

    let client = Postgrest::new("https://kwaorndluoqqnsbgpdkz.supabase.co/rest/v1").insert_header("apikey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3YW9ybmRsdW9xcW5zYmdwZGt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwMDI2ODYsImV4cCI6MjAxNzU3ODY4Nn0.CS_2WCh6nQm3nZOwbp5kRzi_pV_v6g4kQJjsgPd0QFA");
    let resp = client
        .from("books")
        .select("*")
        .or(format!("title.eq.{},author.eq.{}", s, s))
        .execute()
        .await?;

    println!("{}", resp.text().await?);
    Ok(())
}

#[tokio::main]
async fn main() {
    loop {
        println!("Options:");
        println!("1. List Books");
        println!("2. Search for Books");
        println!("3. Exit");

        let mut choice = String::new();
        print!("Enter your choice: ");
        io::stdout().flush().unwrap();
        io::stdin().read_line(&mut choice).unwrap();

        match choice.trim() {
            "1" => list_books().await.unwrap(),
            "2" => search_book().await.unwrap(),
            "3" => break,
            _ => println!("Invalid choice!"),
        }
    }
}
