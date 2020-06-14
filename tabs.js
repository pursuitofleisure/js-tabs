const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {

  // Hide all tab panels
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });

  // mark all tabs as unselected
  // for aria attributes must use set attribute
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  });

  // mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);

  // find the associated tabPanel and show it
  // const id = event.currentTarget.id;
  const { id } = event.currentTarget;
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;

}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
