use postgrest::Postgrest;

// #[tokio::get_books]
async fn list_books() -> Result<(), Box<dyn std::error::Error>> {
    let client = Postgrest::new("SUPABASE_URL")
        .insert_header("apikey", "APIKEY");
    let _resp = client
        .from("books")
        .select("*")
        .execute()
        .await?;
    println!("{}", _resp.text().await?);
    Ok(())
}

async fn searchBook() -> Result<(), Box<dyn std::error::Error>> {
    let client = Postgrest::new("SUPABASE_URL")
        .insert_header("apikey", "APIKEY");
    let _resp = client
        .from("books")
        .select("*")
        .or("title.eq.${title},author.eq.${author}")
        .execute()
        .await?;
    println!("{}", _resp.text().await?);
    Ok(())
}
