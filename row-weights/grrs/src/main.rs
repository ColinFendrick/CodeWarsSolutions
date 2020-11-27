fn main() {
    row_weights(vec![1, 2, 3]);
}

fn row_weights(array: Vec<u32>) -> (u32, u32) {
    let mut t1 = 0;
    let mut t2 = 0;

    let mut array = array.into_iter();
    while array.len() > 0 {
        t1 += array.next().unwrap();
        if let Some(next) = array.next() { t2 += next; }
    }

    (t1, t2)
}