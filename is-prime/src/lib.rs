use num::integer::sqrt;

fn is_prime(x: i64) -> bool {
    if x == 2 {return true};
    if x < 2 || x % 2 == 0 {return false};
    (3..).step_by(2).take_while(|i| i*i <= sqrt(x)).all(|i| x % i != 0)
}
