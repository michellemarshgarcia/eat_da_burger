<h1>Eat Da Burger!</h1>
{{#each burgerData}}
  <pre>
    {{#if this.devoured}}
      <span>             <span>This burger was eaten: {{burger_name}}
    {{else}}
      {{burger_name}} 
      <form action="/update/{{ id }}" method="post">
      <button type="submit">Devour it!</button>
    </form> 
    {{/if}}  
  </pre>
{{/each}}

<form action="/create" method="post">
  <textarea name="item" rows="2" cols="30"></textarea>
  <button type="submit">Enter Burger Selection</button>
<form>