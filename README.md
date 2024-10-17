Pasi de urmat:

1. cloneaza proiectul folosind metoda HTTPS
2. creaza feature branch feature/petrea
3. adauga 2 fisiere html si css
4. adauga fisierul de css in html (leaga css-ul)
5. afiseaza orice element html cu styling
6. urca pe branch modificarile tale (git commit, git push)
7. fa al doilea commit cu orice modificare doresti (git commit, git push) - !!!!vezi diferenta dintre git push si git push upstream !!!!
8. creeaza un PR (PULL REQUEST) in GitHub ca sa poti face merge in main branch

Comenzi basic in git:

1. staging changed files - git add .
2. commit changes - git commit -m "Add message"
3. git push / git push --set-upstream origin YOUR_BRANCH (depinde de branch; daca e abia creat vei folosi comanda cu upstream, daca are cel putin un commit pe branch, vei folosit git push)
4. schimbarea branch - git checkout yourBranch
5. schimbarea pe un branch care nu exista (crearea unui nou branch si checkout pe noul branch) - git checkout -b yourNewBranch
6. clonare - git clone yourRepoURL
7. update branch with other changes locally - git pull (inainte sa faci git pull, te duci pe branchul pe care doresti sa il updatezi (git checkout your_branch) )
